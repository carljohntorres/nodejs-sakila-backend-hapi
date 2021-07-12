class Film {
    constructor(film) {
        this.film_id = film.film_id;
        this.title = film.title;
        this.description = film.description;
        this.release_year = film.release_year;
        this.language_id = film.language_id;
        this.original_language_id = film.original_language_id;
        this.rental_duration = film.rental_duration;
        this.rental_rate = film.rental_rate;
        this.length = film.length;
        this.replacement_cost = film.replacement_cost;
        this.rating = film.rating;
        this.special_features = film.special_features;
        this.last_update = film.last_update;
    }
}

module.exports = Film;