import { ProxyState } from '../AppState.js'
import { reviewsService } from '../Services/ReviewsService.js'

// Private
function _draw() {
  const posts = ProxyState.posts
  let template = ''
  posts.forEach(post => {
    if (post.imgurl) {
      template += post.Template
    } else if (post.reviewText) {
      template += post.Template
    }
  })
  document.getElementById('posts').innerHTML = template
}

// Public
export default class ReviewsController {
  constructor() {
    ProxyState.on('posts', _draw)
  }

  async addReview(e) {
    try {
      window.event.preventDefault()
      const form = window.event.target

      const newReview = {
        hotelName: form.hotelName.value,
        reviewText: form.reviewText.value
      }
      console.log(newReview)
      await reviewsService.addReview(newReview)
      form.reset()
    } catch (error) {
      console.error(error)
    }
  }

  async deleteReview(id) {
    try {
      await reviewsService.deleteReview(id)
    } catch (error) {
      console.error(error)
    }
  }

  async addComment() {
    try {
      window.event.preventDefault()
      const form = window.event.target

      const newComment = {
        commentText: form.commentText.value
      }
      await reviewsService.addComment(newComment)
    } catch (error) {
      console.error(error)
    }
  }
}
