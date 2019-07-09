import * as chai from 'chai'
import * as chaiAsPromised from 'chai-as-promised'

import { someErrorList } from './fixtures/some-error-list'
import { EmptyErrorList } from './fixtures/empty-error-list'
chai.use(chaiAsPromised)

const expect = chai.expect

describe('LIB:VALIDATOR:VERROR', async () => {
  it('Should return an error on validate', async () => {
    const errors = new someErrorList()
    try {
      await errors.run()
    } catch (error) {
      expect(error.message).to.be.equal('first of 2 errors: error A')
      expect(error.ase_errors.length).to.be.equal(errors.count())
    }
  })

  it('Should not return any error', async () => {
    const errors = new EmptyErrorList()
    const response = await errors.run()
    expect(response).to.be.equal(undefined)
    expect(errors.count()).to.be.equal(0)
  })
})
