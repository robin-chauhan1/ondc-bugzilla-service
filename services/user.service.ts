import { ICreateUser } from 'interfaces/Bugs'
import { logger } from 'shared/logger'
import HttpRequest from 'utils/HttpRequest'

class UserService {
  async createUser(data: ICreateUser) {
    try {
      const postInstance = new HttpRequest({
        url: '/rest/user',
        method: 'post',
        headers: { 'X-BUGZILLA-API-KEY': process.env.API_KEY },
        data: data,
      })
      const response = await postInstance.send()

      return response
    } catch (error: any) {
      logger.error(error)
      return error
    }
  }

  async getUser({ userId }: { userId: string }) {
    try {
      const postInstance = new HttpRequest({
        url: `/rest/user/${userId}`,
        method: 'get',
        headers: { 'X-BUGZILLA-API-KEY': process.env.API_KEY },
      })
      const response = await postInstance.send()

      return response
    } catch (error: any) {
      logger.error(error)
      return error
    }
  }
}

export default UserService