import { DotenvParseOutput } from 'dotenv'
import { ConfigManager } from '../index'
import { injectable, inject } from 'inversify'
import * as dotenv from 'dotenv'
import { LIB_TYPES } from '../../util/lib-ioc-types'
const defaultValue = <DotenvParseOutput>dotenv.config().parsed

@injectable()
export class EnvConfigManager implements ConfigManager {
  private config: Map<string, Map<string, any>>
  constructor(
    @inject(LIB_TYPES.RawConfig)
    env: DotenvParseOutput,
    separator: string = '-'
  ) {
    this.config = new Map()
    if (!env) {
      return
    }
    const keys = Object.keys(env)
    for (let index = 0; index < keys.length; index++) {
      const key = keys[index]
      const value = env[key]
      const splitedKeys = key.split(separator)
      const containerName: string = splitedKeys.shift() as string
      const keyParsered: string = (splitedKeys.length
        ? splitedKeys.join(separator)
        : containerName) as string
      this.set(containerName, keyParsered, value)
    }
  }

  public get(
    containerKey: string,
    key: string
  ): string | number | boolean | object | undefined {
    const container = this.config.get(containerKey)
    if (!(container instanceof Map)) {
      return undefined
    }

    return container.get(key)
  }
  private set(
    containerKey: string,
    key: string,
    value: string | number | boolean | object
  ): boolean {
    if (!this.config.has(containerKey)) {
      this.config.set(containerKey, new Map())
    }

    const container = this.config.get(containerKey)
    if (!(container instanceof Map)) {
      return false
    }

    if (container.has(key)) {
      return false
    }

    container.set(key, value)
    return true
  }
}
