class Actor {
    constructor(actor) {
        this.actor_id = actor.actor_id;
        this.first_name = actor.first_name;
        this.last_name = actor.last_name;
        this.last_update = actor.last_update;
    }
}

module.exports = Actor;