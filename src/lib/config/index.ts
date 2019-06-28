export interface ConfigManager {
  get(
    container: string,
    key: string
  ): string | number | boolean | object | undefined
}
