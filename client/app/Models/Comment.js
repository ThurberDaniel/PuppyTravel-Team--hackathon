export default class Comment {
  constructor(data) {
    this.userId = data.userId
    this.commentText = data.commentText
    this.postId = data.postId
  }

  get Template() {
    return `
        <div class="comment-container p-5 bg-white">
            <div class="comment-content d-flex">
                <div class="comment-user-info">
                    <i class="fas fa-user fa-4x"></i>
                    <h4 class="comment-username">USERNAME</h4>
                </div>
                <p class="lead">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam, expedita at atque dicta laborum illum molestias consequuntur earum. Eius, in veritatis! Et neque explicabo ad.</p>
            </div>
            <div class="d-flex justify-content-end">
                <button class="btn btn-success">DELETE COMMENT</button>
                <div class="heart-info d-flex">
                    <div class="heart-count display-4 ml-5" id="heart-count">4</div>
                    <i class="far fa-heart fa-3x"></i>
                </div>
            </div>
        </div>
    `
  }
}
