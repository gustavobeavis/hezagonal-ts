export interface ConfigManager {
  get(
    key: string,
    container: string
  ): string | number | boolean | object | undefined
}
