import { ProxyState } from '../AppState.js'
import { imagesService } from '../Services/ImagesService.js'
import Image from '../Models/Image.js'


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

function _drawComments(id) {
  const comments = ProxyState.comments.filter(c => c.id === id)
  let template = ''
  comments.forEach(comment => {
    template += comment.Template
  })

  document.getElementById(id).innerHTML = template
}

// Public
export default class ImagesController {
  constructor() {
    ProxyState.on('posts', _draw)
    ProxyState.on('comments', _drawComments)

    // this.getAll()
  }

  async getAll() {
    try {
      const res = await imagesService.getAll()
      console.log(res.data)
      ProxyState.posts = res.data.map(p => new Image(p))
    } catch (error) {
      console.error(error)
    }
  }

  async addImage(e) {
    try {
      window.event.preventDefault()
      const form = window.event.target

      const newImage = {
        title: form.postTitle.value,
        imgurl: form.imgUrl.value
      }
      console.log(newImage)
      await imagesService.addImage(newImage)
      form.reset()
    } catch (error) {
      console.error(error)
    }
  }

  async deleteImage(id) {
    try {
      await imagesService.deleteImage(id)
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
      await imagesService.addComment(newComment)
    } catch (error) {
      console.error(error)
    }
  }
}
