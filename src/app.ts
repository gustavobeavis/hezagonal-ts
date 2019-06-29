import * as http from 'http'
import bootstrap from './bootstrap';
import { LIB_TYPES } from './lib/util/lib-ioc-types';
import { ConfigManager } from './lib/config/index';
export async function main() {
const container = await bootstrap();
const configManager: ConfigManager = container.get(LIB_TYPES.ConfigManager);

console.log(configManager.get('BOOTSTRAP', 'teste'))
const status: number = 200
const port: number = 8080
http
  .createServer((req, res) => {
    res.writeHead(status, { 'Content-Type': 'text/plain' })
    res.end('Hello cccc.JS!')
  })
  .listen(port)
console.log('Server running at http://localhost:8080/')

}
