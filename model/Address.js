class Address {
    constructor(address) {
        this.address_id = address.address_id;
        this.address = address.address;
        this.address2 = address.address2;
        this.district = address.district;
        this.city_id = address.city_id;
        this.postal_code = address.postal_code;
        this.phone = address.phone;
        this.location = address.location;
        this.last_update = address.last_update;
    }
}

module.exports = Address;