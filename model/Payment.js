class Payment {
    constructor(payment) {
        this.payment_id = payment.payment_id;
        this.customer_id = payment.customer_id;
        this.staff_id = payment.staff_id;
        this.rental_id = payment.rental_id;
        this.amount = payment.amount;
        this.payment_date = payment.payment_date;
        this.last_update = payment.last_update;
    }
}

module.exports = Payment;