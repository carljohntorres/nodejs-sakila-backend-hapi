class Role {
    constructor(role) {
        this.role_id = role.role_id;
        this.level = role.level;
        this.description = role.description;
        this.admin = role.admin;
        this.last_update = role.last_update;
    }
}

module.exports = Role;