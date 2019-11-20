import IUser from './IUser'
import User from './User'

describe('User', () => {
  let user: IUser

  beforeEach(() => {
    user = new User({
      id: 12,
      name: 'Joe',
      username: 'joe',
    })
  })

  describe('getId', () => {
    it('should get the right thing', () => {
      expect(user.getId()).toBe(12)
    })
  })
  describe('getName', () => {
    it('should get the right thing', () => {
      expect(user.getName()).toBe('Joe')
    })
  })
  describe('getUsername', () => {
    it('should get the right thing', () => {
      expect(user.getUsername()).toBe('joe')
    })
  })
  describe('getAvatar', () => {
    it('should get the right thing', () => {
      expect(user.getAvatar()).toBe(undefined)
    })
  })

  describe('updateName', () => {
    beforeEach(() => {
      user.updateName('Joey')
    })

    it('should update', () => {
      expect(user.getName()).toBe('Joey')
    })
  })

  describe('updateAvatar', () => {
    beforeEach(() => {
      user.updateAvatar('giphy.com/something-something')
    })

    it('should update', () => {
      expect(user.getAvatar()).toBe('giphy.com/something-something')
    })
  })

  describe('toObject', () => {
    it('should match snapshot', () => {
      expect(user.toObject()).toMatchSnapshot()
    })
  })
})
