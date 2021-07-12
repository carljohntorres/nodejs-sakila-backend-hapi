class Store {
    constructor(store) {
        this.store_id = store.store_id;
        this.manager_staff_id = store.manager_staff_id;
        this.address_id = store.address_id;
        this.last_update = store.last_update;
    }
}

module.exports = Store;