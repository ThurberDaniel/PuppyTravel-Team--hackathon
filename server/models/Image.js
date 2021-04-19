import mongoose from 'mongoose'
const Schema = mongoose.Schema

const Image = new Schema(
  {
    userId: { type: String, ref: 'Account', required: true },
    title: { type: String, required: true },
    imgurl: { type: String },
    heartCount: { type: Number }

    // NOTE If you wish to add additional public properties for Accounts do so here\

  },
  { timestamps: true, toJSON: { virtuals: true } }

)

Image.virtual('account', {
  localField: 'userId',
  ref: 'Account',
  foreignField: '_id',
  justOne: true
})

export default Image
