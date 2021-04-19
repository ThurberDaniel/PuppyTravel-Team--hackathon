export default class Review {
  constructor(data) {
    this.hotelName = data.hotelName
    this.reviewText = data.reviewText
    this.id = data.id
  }

  get Template() {
    return `
    <div class="review-container p-5 mb-5 bg-white">
            <div class="review-card">
                <div class="review-header d-flex">
                    <i class="fas fa-user fa-4x"></i>
                    <div class="review-titles">
                        <div class="review-title display-3">${this.hotelName}</div>
                        <div class="review-username">Jane Smith</div>
                    </div>
                </div>
                <div class="review-text lead">${this.reviewText}</div>

                <div class="image-card-footer d-flex justify-content-between pt-4 pb-3">
                    <form class="form-inline d-flex justify-content-center" onsubmit="app.reviewsController.addComment()">
                        <div class="form-group mb-2">
                            <label for="commentText" class=""></label>
                            <input type="text" class="bg-light mr-2 border-0 rounded p-2 shadow review-input" id="commentText" name="commentText"
                                placeholder="Comment...">
                        </div>
                        <button type="submit" class="btn btn-dark mb-2 shadow ml-2"><i class="fas fa-plus fa-2x"></i></button>
                    </form>
                
                    <button class="btn btn-large btn-success">SHOW COMMENTS</button>
                    <i class="fas fa-trash" onclick="app.reviewsController.deleteReview('${this.id}')"></i>
                </div>

                <div class="image-comments" id="image-comments"></div>
            </div>
        </div>
    `
  }
}
