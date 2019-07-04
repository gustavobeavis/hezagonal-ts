# Biblioteca de configuração baseada em Env

Essa biblioteca respeita as definições do contrato de interface do ConfigManager, de modo que ela tem como método de construção, a todas as variáveis de ambiente, e um separador padrão para explitar os containers das variáveis de ambiente.

## Contrato

~~~~ typescript
interface  ConfigManager {
  get(key: string, container: string): string | number | boolean | object | undefined
}
~~~~

## Implementação
É importante que todo consumidor faça a implementação dessa classe como um singleton, que deve ser acessíveis em todos os níveis do sistema, mas há a possibilidade de mais de uma instancia dependendo do contexto da aplicação em alguns casos bem específicos.

### Exemplo de uso

~~~~ typescript
import * as dotenv from 'dotenv';
import { EnvConfigManager } from '.config/env/index';

const config = dotenv.config({ path: '.env' });
const envInstance = new EnvConfigManager(<dotenv.DotenvParseOutput>config.parsed);

envInstance.get('HOST', 'MYSQL'); // localhost
~~~~
