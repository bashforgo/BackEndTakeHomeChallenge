import IUser from '../models/IUser'
import { addUser, getAllUsers, getLastIdUsers, getUserById } from './UsersRepo'

describe('UsersRepo', () => {
  describe('getLastIdUsers', () => {
    it('should return the last id', () => {
      expect(getLastIdUsers()).toBe(5)
    })
  })

  describe('getAllUsers', () => {
    it('should return all users', () => {
      expect(getAllUsers()).toMatchSnapshot()
    })
  })

  describe('addUser', () => {
    beforeEach(() => {
      addUser({
        getId: () => 6,
        getName: () => 'new user',
        getUsername: () => 'admin',
        getAvatar: () => 'undefined',
      } as IUser)
    })

    it('should add the new user', () => {
      expect(getAllUsers()).toMatchSnapshot()
    })
  })

  describe('getUserById', () => {
    it('should get the user', () => {
      expect(getUserById(5)).toMatchSnapshot()
    })

    it('should give null if not found', () => {
      expect(getUserById(666)).toBeNull()
    })
  })
})
