const Staff = require('../model/Staff');
const sql = require('../connection/connDB');

Staff.getAll = result => {

    const query = 'SELECT * FROM staff';

    // using pool instead one time connection for all client access
    sql.getConnection((err, conn) => {

        if (err) {
            console.log(`Error : ${err}`);
            return result(err, []);
        }

        console.log(`Pool threadId : ${conn.threadId}`);

        conn.query(query,
            (error, res) => {

                // When done with the connection, release it.
                conn.release();
                // conn.destroy();

                if (error) {
                    return result(null, error);
                }

                var list = [];

                Object.keys(res).forEach(key => {
                    list.push(new Staff(res[key]));
                });

                return result(null, list);

            });

    });

};


Staff.getById = (param, result) => {

    const query = `SELECT * FROM staff WHERE staff_id = ?`;

    sql.getConnection((err, conn) => {

        if (err) {
            console.log(`Error : ${err}`);
            return result(err, []);
        }

        console.log(`Pool threadId : ${conn.threadId}`);

        conn.query(query,
            param.staff_id,
            (error, res) => {

                // conn.destroy();
                conn.release();

                if (error) {
                    console.log(`Error : ${error}`);
                    return result(null, error);
                }

                if (res.length) {
                    return result(null, new Staff(res[0]));
                }

                return result({ flag: 'not_found' }, []);

            });

    });

};

Staff.create = (param, result) => {

    const query = 'INSERT INTO staff ' +
        '(first_name, last_name, address_id, email, store_id, active, role_id, username) ' +
        'VALUES (?) ';

    const values = [
        param.first_name,
        param.last_name,
        param.address_id,
        param.email,
        param.store_id,
        param.active,
        param.role_id,
        param.first_name
    ];


    sql.getConnection((err, conn) => {

        if (err) {
            console.log(`Error : ${err}`);
            return result(err, []);
        }

        console.log(`Pool threadId : ${conn.threadId}`);

        conn.query(query,
            [values],
            (error, res) => {

                // conn.destroy();
                conn.release();

                if (error) {
                    console.log(`Error : ${error}`);
                    result(null, error);
                    return;
                }

                result(null, { message: `Account created` });

            });
    });


};

Staff.updateById = (param, body, result) => {

    const query = `UPDATE staff SET ` +
        `first_name = ?, ` +
        `last_name = ?, ` +
        `address_id = ?, ` +
        `store_id = ?, ` +
        `active = ?, ` +
        `role_id = ? ` +
        `WHERE staff_id = ?`;

    // I separate values from query because of reserved character
    // like single qoute or any javascript script definition that
    // will result internal server error because of characters.

    const values = [
        body.first_name,
        body.last_name,
        body.address_id,
        body.store_id,
        body.active,
        body.role_id,
        param.staff_id
    ];

    sql.getConnection((err, conn) => {

        if (err) {
            console.log(`Error : ${err}`);
            return result(err, []);
        }

        conn.query(query,
            values,
            (error, res) => {

                // conn.destroy();
                conn.release();

                if (err) {
                    console.log(`Error : ${error}`);
                    return result(null, error);
                }

                result(null, { message: `Staff id : ${param.staff_id} is updated` });

            });
    });

}

Staff.deleteById = (param, result) => {

    const query = `DELETE FROM staff WHERE staff_id = ?`;

    sql.getConnection((err, conn) => {

        if (err) {
            console.log(`Error : ${err}`);
            return result(err, []);
        }

        conn.query(query,
            param.staff_id,
            (error, res) => {

                conn.destroy();

                if (error) {
                    console.log(`Error : ${err}`);
                    result(null, err);
                    return;
                }

                result(null, { message: `Staff id : ${param.staff_id} is deleted.` });
            });

    });

};

module.exports = Staff;