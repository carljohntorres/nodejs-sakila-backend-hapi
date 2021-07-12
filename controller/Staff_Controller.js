const Staff_Service = require('../service/Staff_Service');

exports.getAll = async (request, h) => {
    
    try {
        const results = await new Promise((resolve, reject) => {
            Staff_Service.getAll((err, data) => {
                if (err) {
                    reject(err);
                } else {
                    resolve(data);
                }
            });
        });
        return results;
    } catch (err) {
        console.log(err);
    }
   
}

exports.getById = (req, h) => {
    
    Staff_Service.getAll(
        (err, data) => {
            
            //res.send(data);
            return { data };

    });
   
}


//module.exports = exports;