import { ProxyState } from '../AppState.js'
import Image from '../Models/Image.js'
import { api } from './AxiosService.js'
import Comment from '../Models/Comment.js'

class ImagesService {
  async addImage(newImage) {
    const res = await api.post('posts', newImage)
    const image = new Image(res.data)
    ProxyState.posts = [...ProxyState.posts, image]
  }

  async deleteImage(id) {
    await api.delete('posts/' + id)
    ProxyState.posts = ProxyState.posts.filter(p => p.id !== id)
  }

  async addComment(newComment) {
    const res = await api.post('comments', newComment)
    const comment = new Comment(res.data)
    ProxyState.comments = [...ProxyState.comments, comment]
  }

  async getAll() {
    const res = await api.get('posts')
    console.log(res)
    ProxyState.posts = res.data.map(p => new Image(p))
  }
}

export const imagesService = new ImagesService()
