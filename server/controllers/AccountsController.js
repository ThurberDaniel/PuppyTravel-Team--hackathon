import { Auth0Provider } from '@bcwdev/auth0provider'
import { accountService } from '../services/AccountsService'
import BaseController from '../utils/BaseController'

export class AccountsController extends BaseController {
  constructor() {
    super('account')
    this.router
      .use(Auth0Provider.getAuthorizedUserInfo)
      .get('', this.getUserAccount)
  }

  async getUserAccount(req, res, next) {
    try {
      const account = await accountService.getAccount(req.userInfo)
      res.send(account)
    } catch (error) {
      next(error)
    }
  }
}
