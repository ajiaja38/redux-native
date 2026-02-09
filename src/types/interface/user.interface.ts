export interface IUser {
  id: number
  name: string
  username: string
  email: string
  address: UserAddress
  phone: string
  website: string
  company: ICompany
}

interface UserAddress {
  street: string
  suite: string
  city: string
  zipcode: string
  geo: IGeoLocation
}

interface IGeoLocation {
  lat: string
  lng: string
}

interface ICompany {
  name: string
  catchPhrase: string
  bs: string
}
