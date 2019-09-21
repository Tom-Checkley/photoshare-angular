export class User {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  id: string;
  userName?: string;
  profileImage?: File;
  profileImageUrl?: string;

  constructor(
    firstName: string,
    lastName: string,
    email: string,
    password: string,
    userName?: string,
    profileImage?: File,
    profileImageUrl?: string
  ) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.email = email;
    this.password = password;
    this.userName = userName;
    this.profileImage = profileImage;
    this.profileImageUrl = profileImageUrl;
  }
}
