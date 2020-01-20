import { Document } from 'mongoose'

export interface ProductInterface extends Document {
  description: string;
}
