import { LoggerConsole } from './console'
import { Logger } from './index'

let logger = undefined

if (!logger) {
  logger = new LoggerConsole()
}

export default <Logger>logger
