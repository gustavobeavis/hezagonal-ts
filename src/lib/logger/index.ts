export interface Logger {
  info(message: string, details?: object | string | boolean | null): void
  warn(message: string, details?: object | string | boolean | null): void
  error(message: string, details?: object | string | boolean | null): void
  debug(message: string, details?: object | string | boolean | null): void
}
