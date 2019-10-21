import IUser from './IUser'

export default class User implements IUser {
  private id: number
  private name: string
  private username: string

  constructor({ id, name, username }) {
    this.id = id
    this.name = name
    this.username = username
  }

  /**
   * Returns the incremental id
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
   * Returns the username of this user
   */
  public getUsername() {
    return this.username
  }


  /**
   * Sets the name of this user
   */
  public updateName(name: string) {
    this.name = name
    return this
  }

  /**
   * Returns the Object version of this instance
   */
  public toObject() {
    return {
      id: this.getId(),
      name: this.getName(),
      username: this.getUsername(),
    }
  }
}
