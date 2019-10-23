import IUser from '../models/IUser'
import User from '../models/User'

const users = [
  {
    id: 1,
    name: 'Daenerys Targaryen',
    username: 'thequeenbee',
  },
  {
    id: 2,
    name: 'Jon Snow',
    username: 'forthebrotherhood'
  },
  {
    id: 3,
    name: 'Sansa Stark',
    username: 'joffery.fan'
  },
  {
    id: 4,
    name: 'Ned Stark',
    username: 'honouraboveall'
  },
  {
    id: 5,
    name: 'Cersei Lannister',
    username: 'bestmuminwesteros'
  }
]

export const getLastIdUsers = () => users.reduce((prev, current) => (prev.id > current.id) ? prev : current).id
export const getAllUsers = () => users.map(user => new User(user))
export const findUserById = (id: number) => users.find(user => user.id === id)
export const addUser = (user: IUser) => users.push({
  id: user.getId(),
  name: user.getName(),
  username: user.getUsername(),
})
