import { ProductInterface } from '../interfaces/Product.interface'
import mongoose, { Schema } from 'mongoose'

const ProductSchema = new Schema({
  description: { type: String, required: true }
}, {
  timestamps: true
})

export default mongoose.model<ProductInterface>('Product', ProductSchema)
