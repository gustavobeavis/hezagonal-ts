import { User } from '../../../common/models/user'
import { MultiError } from 'VError'
import { ValidatorVError } from '../../../../lib/validator/verror/index'
import { InavlidName, InavlidDisplayName, InavlidEmail } from './errors'
import logger from '../../../../lib/logger/instance'
export class ValidateUser extends ValidatorVError {
  private user: User
  constructor(user: User) {
    super()
    this.user = user
    return this
  }
  name() {
    if (!this.user.name) {
      this.add(new InavlidName())
    }

    return this
  }

  displayName() {
    if (!this.user.displayName) {
      this.add(new InavlidDisplayName())
    }

    return this
  }
  email() {
    const regex = /\S+@\S+\.\S+/
    if (!regex.test(this.user.email)) {
      this.add(new InavlidEmail())
    }

    return this
  }
  async run(): Promise<void | Error> {
    this.name()
      .displayName()
      .email()

    if (this.errors.length) {
      logger.error('Error on validate user')
      throw new MultiError(this.errors)
    }

    return
  }
}
