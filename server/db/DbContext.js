import mongoose from 'mongoose'
import ImageSchema from '../models/Image'
import AccountSchema from '../models/Account'

class DbContext {
  Images = mongoose.model('Image', ImageSchema);
  Account = mongoose.model('Account', AccountSchema);
}

export const dbContext = new DbContext()
