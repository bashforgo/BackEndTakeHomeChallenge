import IUser from '../models/IUser'
import * as repo from '../repositories/UsersRepo'
import UsersService from './UsersService'

describe('UsersService', () => {
  let service: UsersService

  beforeEach(() => {
    service = new UsersService()

    const fnNames = Object.keys(repo) as (keyof typeof repo)[]
    fnNames.forEach(fnName => {
      jest.spyOn(repo, fnName)
    })
  })

  describe('getAll', () => {
    it('should return all the users', () => {
      expect(service.getAll()).toMatchSnapshot()
      expect(repo.getAllUsers).toHaveBeenCalledWith()
      expect(repo.getAllUsers).toHaveBeenCalledTimes(1)
    })
  })

  describe('search', () => {
    it('should return some of the users', () => {
      expect(service.search('stark')).toMatchSnapshot()
      expect(repo.getUsersByQuery).toHaveBeenCalledWith('stark')
      expect(repo.getUsersByQuery).toHaveBeenCalledTimes(1)
    })
  })

  describe('create', () => {
    let user: IUser

    beforeEach(() => {
      user = service.create('the dude', 'admin')
    })

    it('should create the new user', () => {
      expect(user).toMatchSnapshot()
      expect(repo.addUser).toHaveBeenCalledWith(user)
      expect(repo.addUser).toHaveBeenCalledTimes(1)
      expect(service.search('dude')).toMatchSnapshot()
    })
  })

  describe('update', () => {
    beforeEach(() => {
      service.update({
        avatar: 'lebowski',
        id: 6,
        name: 'Jeff',
        username: 'admin-cant-change-this',
      })
    })

    it('should update the user', () => {
      expect(service.search('admin')).toMatchSnapshot()
    })
  })
})
