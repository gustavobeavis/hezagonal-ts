import CommonError from '../../../../lib/error/index'

export class InavlidEmail extends CommonError {
  message = 'Invalid E-mail'
}

export class InavlidName extends CommonError {
  message = 'Invalid Name'
}

export class InavlidDisplayName extends CommonError {
  message = 'Invalid DisplayName'
}
