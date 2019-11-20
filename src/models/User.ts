import IUser from './IUser'
import IUserModel from './IUserModel'

export default class User implements IUser {
  private id: number
  private name: string
  private username: string
  private avatar?: string

  constructor({ id, name, username, avatar }: IUserModel) {
    this.id = id
    this.name = name
    this.username = username
    this.avatar = avatar
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

  public getAvatar() {
    return this.avatar
  }

  /**
   * Sets the name of this user
   */
  public updateName(name: string) {
    this.name = name
    return this
  }

  public updateAvatar(avatar?: string) {
    this.avatar = avatar
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
      avatar: this.getAvatar(),
    }
  }
}
