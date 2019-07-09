import * as dotenv from 'dotenv'
import * as chai from 'chai'
import * as chaiAsPromised from 'chai-as-promised'
import { ValidateUser } from '../../../../../src/domain/user/services/validate/index'
import { emptyUser, invalidNameUser, invalidDisplayNameUser, invalidEmailUser, validUser  } from './fisxtures/users'
import { Validate } from '../../../../../src/lib/validator/index';
chai.use(chaiAsPromised)

const expect = chai.expect

describe('DOMAIN:USER:SERVICE:VALIDATE', async () => {
  it('Should return an invalide User where full arguments are invalid', async () => {
    const validateUser = new ValidateUser(emptyUser)
    try {
      await validateUser.run();
    } catch (errors) {
      const contErrors = 3
      const validateMessages = errors.ase_errors.map((err: any) => {
        return err.message;
      })
      expect(errors.ase_errors.length).to.be.equal(contErrors)
      expect(validateMessages).contains('Invalid Name')
      expect(validateMessages).contains('Invalid DisplayName')
      expect(validateMessages).contains('Invalid E-mail')
    }
  })

  it('Should return an invalide User where name is invalid', async() => {
    const validateUser = new ValidateUser(invalidNameUser)
    try {
      await validateUser.run();
    } catch (errors) {
      const contErrors = 1
      const validateMessages = errors.ase_errors.map((err: any) => {
        return err.message;
      })
      expect(errors.ase_errors.length).to.be.equal(contErrors)
      expect(validateMessages).contains('Invalid Name')
    }
  })

  it('Should return an invalide User where displayName is invalid', async () => {
    const validateUser = new ValidateUser(invalidDisplayNameUser)
    try {
      await validateUser.run();
    } catch (errors) {
      const contErrors = 1
      const validateMessages = errors.ase_errors.map((err: any) => {
        return err.message;
      })
      expect(errors.ase_errors.length).to.be.equal(contErrors)
      expect(validateMessages).contains('Invalid DisplayName')
    }
  })

  it('Should return an invalid User where e-mail is invalid', async () => {
    const validateUser = new ValidateUser(invalidEmailUser)
    try {
      await validateUser.run();
    } catch (errors) {
      const contErrors = 1
      const validateMessages = errors.ase_errors.map((err: any) => {
        return err.message;
      })
      expect(errors.ase_errors.length).to.be.equal(contErrors)
      expect(validateMessages).contains('Invalid E-mail')
    }
  })

  it('Should return a valid User', async () => {
    const validateUser = new ValidateUser(validUser)
    const result = await validateUser.run();
    expect(result).is.undefined
  })
})
