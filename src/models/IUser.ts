import IListing from './IListing'

export default interface IUser {
  getId(): number
  getName(): string
  updateName(name: string): IUser
  getListings(): Array<IListing>
  addListing(listing: IListing): IUser
  toObject(): Object
}