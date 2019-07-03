import * as dotenv from 'dotenv';
import * as chai from 'chai';
import * as chaiAsPromised from 'chai-as-promised';

import { EnvConfigManager } from '../../../../../src/lib/config/env/index';
chai.use(chaiAsPromised);

const expect = chai.expect;

describe('LIB:CONFIG:ENV', async () => {
  const config = dotenv.config({ path: './test/unit/lib/config/env/fixtures/fake.env' });
  const envInstance = new EnvConfigManager(<dotenv.DotenvParseOutput>config.parsed);

  it('Should return an enviroment variable in container DB',
    () => {
      const result = 'localhost';
      expect(envInstance.get('DB', 'MONGO-HOST')).to.be.equal(result);
  });

  it('Should return an invalid variable in container DB',
    () => {
      return expect(envInstance.get('DB', 'INVALID')).to.be.undefined;
  });

  it('Should return an invalid enviroment variable in container DB',
    () => {
      expect(envInstance.get('INVALID', 'INVALID')).to.be.undefined;
  });

  it('Should return the same value after overwriting',
    () => {
      const result = 'localhost';
      const fake:any = envInstance;
      const set:boolean  = fake.set('DB', 'MONGO-HOST', 'invalid');
      expect(set).to.be.false;
      expect(fake.get('DB', 'MONGO-HOST')).to.be.equal(result);
  });
})
