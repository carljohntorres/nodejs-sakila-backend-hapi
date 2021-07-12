class Staff {
   constructor(staff) {
      this.staff_id = staff.staff_id;
      this.first_name = staff.first_name;
      this.last_name = staff.last_name;
      this.address_id = staff.address_id;
      //this.picture = staff.picture;
      this.email = staff.email;
      this.store_id = staff.store_id;
      this.active = staff.active;
      this.username = staff.username;
      //this.password = staff.password;
      this.role_id = staff.role_id;
      this.login_attempt = staff.login_attempt;
      this.password_set = staff.password_set;
      this.last_update = staff.last_update;
   }
}

module.exports = Staff;



