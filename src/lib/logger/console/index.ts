import { Logger } from '..'

export class LoggerConsole implements Logger {
  info(message: string, details: object | string | boolean | null): void {
    console.log(message, details)
  }
  warn(message: string, details: object | string | boolean | null): void {
    console.warn(message, details)
  }
  error(message: string, details: object | string | boolean | null): void {
    console.error(message, details)
  }
  debug(message: string, details: object | string | boolean | null): void {
    console.debug(message, details)
  }
}
