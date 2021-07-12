class Rental {
    constructor(rental) {
        this.rental_id = rental.rental_id;
        this.rental_date = rental.rental_date;
        this.inventory_id = rental.inventory_id;
        this.customer_id = rental.customer_id;
        this.return_date = rental.return_date;
        this.staff_id = rental.staff_id;
        this.last_update = rental.last_update;
    }
}

module.exports = Rental;