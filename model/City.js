class City {
    constructor(city) {
        this.city_id = city.city_id;
        this.city = city.city;
        this.country_id = city.country_id;
        this.last_update = city.last_update;
    }
}

module.exports = City;