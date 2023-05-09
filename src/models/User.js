class User {
  static CUSTOMER_ROLE_ID = "ca2c1507-d542-4f47-bb63-a9c44a536498";

  constructor(firstname, lastname, email, password, id = null) {
    this.firstname = firstname;
    this.lastname = lastname;
    this.email = email;
    this.password = password;
    this.id = id;
    this.role = User.CUSTOMER_ROLE_ID; //customer role
    this.accessToken = null;
    this.refreshToken = null;
    this.expires = null;
  }
}

export default User;
