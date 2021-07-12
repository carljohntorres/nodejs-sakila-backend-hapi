class Inventory {
    constructor(inventory) {
        this.inventory_id = inventory.inventory_id;
        this.film_id = inventory.film_id;
        this.store_id = inventory.store_id;
        this.last_update = inventory.last_update;
    }
}

module.exports = Inventory;