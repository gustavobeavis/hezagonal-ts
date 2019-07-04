import { Container } from 'inversify'
import { LIB_TYPES } from '../lib/util/lib-ioc-types'
import { EnvConfigManager } from '../lib/config/env'
import * as dotenv from 'dotenv'
export default async function(container:Container): Promise<Container>{
  // LOAD env vars
  container
    .bind(LIB_TYPES.RawConfig)
    .toConstantValue(dotenv.config().parsed)

  // Instance envManager as a Singleton
  container
    .bind(LIB_TYPES.ConfigManager)
    .to(EnvConfigManager)
    .inSingletonScope();

  return container;
}
