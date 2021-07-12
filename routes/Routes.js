// const Staff_Route = require('./route/Staff_Route');
// const Customer_Route = require('./route/Staff_Route');

// // Manually add routes and define
// module.exports = [].concat(
//     Staff_Route, 
//     Customer_Route
// );

/**
 * I found better solution haha
 * https://stackoverflow.com/questions/27766623/how-to-store-routes-in-separate-files-when-using-hapi
 * but i re-use my previous way to navigate all fiels in the directory
 */

 const path = require('path');
 const fs = require('fs');

 let routes = [];

 const norm_path = path.join(__dirname, "route");
    
 fs.readdirSync(norm_path).forEach( file => {
    routes = routes.concat(require(`./route/${file}`));
 });


 module.exports = routes;