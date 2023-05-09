class User {
  static CUSTOMER_ROLE_ID = "ca2c1507-d542-4f47-bb63-a9c44a536498";

  constructor(first_name, last_name, email, password, id = null) {
    this.first_name = first_name;
    this.last_name = last_name;
    this.email = email;
    this.password = password;
    this.id = id;
    this.role = User.CUSTOMER_ROLE_ID; //customer role
    this.status = null;

    this.accessToken = null;
    this.refreshToken = null;
    this.expires = null;
  }
}

export default User;
