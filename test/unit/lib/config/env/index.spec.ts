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
      expect(envInstance.get('MONGO-HOST', 'DB')).to.be.equal(result);
  });

  it('Should return an enviroment variable in container DEFAULT',
    () => {
      expect(envInstance.get( 'WITHOUTCONTAINER')).to.be.equal(result);
  });

  it('Should return an invalid variable in container DB',
    () => {
      return expect(envInstance.get('INVALID','DB')).to.be.undefined;
  });

  it('Should return an invalid enviroment variable in container DB',
    () => {
      expect(envInstance.get('INVALID', 'INVALID')).to.be.undefined;
  });

  it('Should return the same value after overwriting',
    () => {
      const result = 'localhost';
      const fake:any = envInstance;
      const set:boolean  = fake.set('MONGO-HOST', 'DB', 'invalid');
      expect(set).to.be.false;
      expect(fake.get('MONGO-HOST', 'DB')).to.be.equal(result);
  });
})
