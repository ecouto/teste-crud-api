import { Router } from 'express'
import ProductController from './controllers/Product.controlle'
import Validators from './validators/Product.validators'

const routes = Router()
const validators = new Validators()

routes.get('/products', ProductController.retrieveAll)
routes.post('/products', validators.createProductValidate(), ProductController.create)
routes.get('/products/:id', ProductController.retrieveProductById)
routes.put('/products/:id', ProductController.update)
routes.delete('/products/:id', ProductController.delete)

export default routes
