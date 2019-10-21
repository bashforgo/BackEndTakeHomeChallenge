export default interface IUser {
  getId(): number
  getName(): string
  getUsername(): string
  updateName(name: string): IUser
  toObject(): Object
}
