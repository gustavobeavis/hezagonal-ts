import { DotenvParseOutput } from 'dotenv'
import { ConfigManager } from '../index'
import { injectable, inject } from 'inversify'
import * as dotenv from 'dotenv'
import { LIB_TYPES } from '../../util/lib-ioc-types'
export const CONTAINER_DEFAULT: string = 'DEFAULT'

@injectable()
export class EnvConfigManager implements ConfigManager {
  private config: Map<string, Map<string, any>>
  constructor(
    @inject(LIB_TYPES.RawConfig)
    env: DotenvParseOutput,
    separator: string = '-'
  ) {
    this.config = new Map()
    const keys = Object.keys(env)
    for (let index = 0; index < keys.length; index++) {
      const key = keys[index]
      const value = env[key]
      const splitedKeys = key.split(separator)
      const containerName: string = (splitedKeys.length > 1
        ? splitedKeys.shift()
        : CONTAINER_DEFAULT) as string
      const keyParsered: string = splitedKeys.join(separator)
      this.set(keyParsered, containerName, value)
    }
  }

  public get(
    key: string,
    containerKey: string = CONTAINER_DEFAULT
  ): string | number | boolean | object | undefined {
    const container = this.config.get(containerKey)
    if (!(container instanceof Map)) {
      return undefined
    }

    return container.get(key)
  }
  private set(
    key: string,
    containerKey: string,
    value: string | number | boolean | object
  ): boolean {
    if (!this.config.has(containerKey)) {
      this.config.set(containerKey, new Map())
    }

    const container = <Map<string, any>>this.config.get(containerKey)

    if (container.has(key)) {
      return false
    }

    container.set(key, value)
    return true
  }
}
