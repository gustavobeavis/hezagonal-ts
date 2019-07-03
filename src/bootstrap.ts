import { Container } from 'inversify'
import { LIB_TYPES } from './lib/util/lib-ioc-types'
import { EnvConfigManager } from './lib/config/env'
import * as dotenv from 'dotenv'

export default async function(): Promise<Container> {
  const container = new Container({
    autoBindInjectable: true,
    skipBaseClassChecks: true,
  })
  container.bind(LIB_TYPES.RawConfig).toConstantValue(dotenv.config().parsed)

  container
    .bind(LIB_TYPES.ConfigManager)
    .to(EnvConfigManager)
    .inSingletonScope()
  return container
}
