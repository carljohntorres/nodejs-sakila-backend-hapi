class Customer {
    constructor(customer) {
        this.customer_id = customer.customer_id;
        this.store_id = customer.store_id;
        this.first_name = customer.first_name;
        this.last_name = customer.last_name;
        this.email = customer.email;
        this.address_id = customer.address_id;
        this.active = customer.active;
        this.create_date = customer.create_date;
        this.last_update = customer.last_update;
    }
}

module.exports = Customer;