
import { ProxyState } from '../AppState.js'
import Review from '../Models/Review.js'
import { api } from './AxiosService.js'
import Comment from '../Models/Comment.js'

class ReviewsService {
  async addReview(newReview) {
    console.log('in service', newReview)
    const res = await api.post('reviews', newReview)
    // res.data.id = res.data._id
    const review = new Review(res.data)
    ProxyState.reviews = [...ProxyState.reviews, review]
  }

  async deleteReview(id) {
    await api.delete('posts/' + id)
    ProxyState.posts = ProxyState.posts.filter(p => p.id !== id)
  }

  async addComment(newComment) {
    const res = await api.post('comments', newComment)
    const comment = new Comment(res.data)
    ProxyState.comments = [...ProxyState.comments, comment]
  }
}

export const reviewsService = new ReviewsService()
