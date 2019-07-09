export interface Validate {
  add(error: Error): this
  run(): Promise<void | Error>
}
