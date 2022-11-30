export class User {
  constructor(
    public id: string,
    public results: string,
    public userName: UserName,
    public email: string,
    public image: string,
    public location: Location
  ) {}
}

interface Location {
  country: string;
  city: string;
  street: StreetLocation;
}

interface StreetLocation {
  streetNumber: number;
  streetName: string;
}

interface UserName {
  gender: string;
  firstName: string;
  lastName: string;
}
