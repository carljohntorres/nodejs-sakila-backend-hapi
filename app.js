const Hapi = require('@hapi/hapi');
// const conn = require('./connection/connDB');
require('dotenv').config();


/**
 *  external route to easy manage instead 
 *  all routes are listed here
 */
const routes = require('./routes/Routes');



const server = Hapi.server({
    port: process.env.PORT || 3000,
    host: process.env.DOMAIN_HOST
});


(async () => {

    try {

        // async connect database before api start
        // await conn.connect( err => {

        //     if (err) {
        //         console.log(err);
        //         return;
        //     }

        //     // register routes
        //     server.route(routes);

        //     // start application
        //     server.start();

        //     console.log(`DATABASE CONNECTED THREAD ID : ${conn.threadId}.`);
            
        // });


        // using pool database 
        server.route(routes);

        await server.start();

    } catch (err) {

        console.log(err);
        
    }
    
})();
