import { AuthController } from './Controllers/AuthController.js'
import ImagesController from './Controllers/ImagesController.js'
import ReviewsController from './Controllers/ReviewsController.js'

class App {
  authController = new AuthController();
  imagesController = new ImagesController();
  reviewsController = new ReviewsController();
}

window.app = new App()
