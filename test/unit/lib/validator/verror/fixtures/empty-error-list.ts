import { ValidatorVError } from '../../../../../../src/lib/validator/verror/index'
export class EmptyErrorList extends ValidatorVError {
  constructor() {
    super()
  }
  count(): number {
    return this.errors.length
  }
}
