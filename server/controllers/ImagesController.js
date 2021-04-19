import BaseController from '../utils/BaseController'
import { imagesService } from '../services/ImagesService'
import { Auth0Provider } from '@bcwdev/auth0provider'
import { dbContext } from '../db/DbContext'

export class ImagesController extends BaseController {
  constructor() {
    super('posts')
    this.router
      .get('', this.getAll)
      .get('/:id', this.getOne)
      .use(Auth0Provider.getAuthorizedUserInfo)
      // NOTE: Beyond this point all routes require Authorization tokens (the user must be logged in)
      .post('', this.create)
      .delete('/:id', this.delete)
  }

  async getAll(req, res, next) {
    try {
      const images = await imagesService.find(req.query)
      res.send(images)
    } catch (error) {
      next(error)
    }
  }

  async getOne(id) {
    try {
      const data = await dbContext.Images.getOne(id)
      if (!data) {
        // eslint-disable-next-line no-undef
        throw new BadRequest('Invalid Id')
      }
      return data
    } catch (error) {

    }
  }

  async create(req, res, next) {
    try {
      req.body.userId = req.userInfo.id
      const image = await imagesService.create(req.body)
      res.send(image)
    } catch (error) {
      next(error)
    }
  }

  async delete(req, res, next) {
    try {
      const data = await imagesService.delete(req.params.id)
      return res.send(data)
    } catch (error) {
      next(error)
    }
  }
}
