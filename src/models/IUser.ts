import IUserModel from './IUserModel'

export default interface IUser {
  getId(): number
  getName(): string
  getUsername(): string
  getAvatar(): string | undefined
  updateName(name: string): this
  updateAvatar(avatar?: string): this
  toObject(): IUserModel
}
