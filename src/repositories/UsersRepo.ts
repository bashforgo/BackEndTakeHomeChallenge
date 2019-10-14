import IUser from '../models/IUser'
import User from '../models/User'

const users = [
  {
    id: 1,
    name: 'Daenerys Targaryen',
    listings: []
  },
  {
    id: 2,
    name: 'Jon Snow',
    listings: []
  },
  {
    id: 3,
    name: 'Sansa Stark',
    listings: []
  },
  {
    id: 4,
    name: 'Ned Stark',
    listings: []
  },
  {
    id: 5,
    name: 'Cersei Lannister',
    listings: []
  }
]

export const getLastIdUsers = () => users.reduce((prev, current) => (prev.id > current.id) ? prev : current).id
export const getAllUsers = () => users.map(user => new User(user))
export const findUserById = (id) => users.find(user => user.id === id)
export const addUser = (user: IUser) => users.push({
  id: user.getId(),
  name: user.getName(),
  listings: user.getListings()
})


