import { dbContext } from '../db/DbContext'
import { BadRequest } from '../utils/Errors'

class ImagesService {
  async create(body) {
    return await dbContext.Images.create(body)
  }

  async delete(id) {
    const data = await dbContext.Images.findOneAndDelete(id)
    if (!data) {
      throw new BadRequest('Invalid Id')
    }
    return 'successfully deleted'
  }

  async find(query = {}) {
    return await dbContext.Images.find(query)
  }

  async getOne(id) {
    const data = await dbContext.Images.getOne(id)
    if (!data) {
      throw new BadRequest('Invalid Id')
    }
    return data
  }
}

export const imagesService = new ImagesService()
