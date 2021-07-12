const staff = require('../../controller/Staff_Controller');

module.exports = [
    { method: 'GET', path: '/staff', handler: staff.getAll },
    { method: 'GET', path: '/staff/{id}', handler: staff.getById }
];