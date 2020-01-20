import { Request, Response } from 'express'
import { ObjectId } from 'mongodb'

import Product from '../schemas/Product.schema'

class ProductController {
  public async retrieveAll (req: Request, res: Response): Promise<Response> {
    const products = await Product.find()
    return res.json(products)
  }

  public async retrieveProductById (req: Request, res: Response): Promise<Response> {
    const id: string = req.params.id

    const product = await Product.findOne({ _id: new ObjectId(id) })

    if (!product) {
      throw new Error('Not Found')
    }
    return res.json(product)
  }

  public async create (req: Request, res: Response): Promise<Response> {
    const product = await Product.create(req.body)
    return res.json(product)
  }

  public async update (req: Request, res: Response): Promise<Response> {
    const product = await Product.findOne({ _id: new ObjectId(req.params.id) })

    if (!product) {
      throw new Error('Not Found')
    } else {
      product.description = await req.body.description
    }
    const productUpdated = await product.save()
    return res.json(productUpdated)
  }

  public async delete (req: Request, res: Response): Promise<Response> {
    const id: string = req.params.id
    const product = await Product.findOne({ _id: new ObjectId(id) })

    if (!product) {
      throw new Error('Not Found')
    }
    const productToDelete = await product.remove()
    return res.json(productToDelete)
  }
}

export default new ProductController()
