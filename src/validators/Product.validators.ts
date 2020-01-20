import { body, ValidationChain } from 'express-validator'

export default class ProductValidator {
  public createProductValidate (): ValidationChain[] {
    return [
      body('description').not().isEmpty().withMessage('Cannot be empty')
    ]
  }
}
