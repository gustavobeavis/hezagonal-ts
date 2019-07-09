import { User } from '../../common/models/user'
import { resolve } from 'path'
import { VError, MultiError } from 'VError'
import { ValidatorVError } from '../../../lib/validator/verror/index'
export class ValidateUser extends ValidatorVError {
  private user: User
  constructor(user: User) {
    super()
    this.user = user
    return this
  }
  name() {
    if (!this.name) {
      this.add(new Error('Invalid name'))
    }

    return this
  }

  displayName() {
    if (!this.name) {
      this.add(new Error('Invalid displayName'))
    }

    return this
  }
  email() {
    const regex = /\S+@\S+\.\S+/
    if (!regex.test(this.user.email)) {
      this.add(new Error('Invalid e-mail'))
    }

    return this
  }
  async run(): Promise<void | Error> {
    this.name()
      .displayName()
      .email()

    if (this.errors.length) {
      throw new MultiError(this.errors)
    }

    return
  }
}
