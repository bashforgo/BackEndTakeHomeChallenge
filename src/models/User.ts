import IUser from './IUser'
import IListing from './IListing'

export default class User implements IUser {
  private id: number
  private name: string
  private listings: Array<IListing>

  constructor({ id, name, listings = [] }) {
    this.id = id
    this.name = name
    this.listings = listings
  }

  /**
   * Returns the UUID 
   */
  public getId() {
    return this.id
  }

  /**
   * Returns the name of this user
   */
  public getName() {
    return this.name
  }

  /**
   * Sets the name of this user
   */
  public updateName(name: string) {
    this.name = name
    return this
  }

  /**
   * Get listings
   */
  public getListings() {
    return this.listings
  }

  /**
   * Adds a new listing to this user
   */
  public addListing(listing: IListing) {
    this.listings.push(listing)
    return this
  }

  /**
   * Returns the Object version of this instance
   */
  public toObject() {
    return {
      id: this.getId(),
      name: this.getName(),
      listings: this.getListings()
    }
  }
}