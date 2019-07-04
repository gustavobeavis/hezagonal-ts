# Biblioteca de configuração

Essa biblioteca tem o objetivo de ser um provedor de dados de configuração para consumo da aplicação de modo que em caso de mudança de estratégia de passagem de configuração, não haja uma refatoração em todo o sistema.


## Contrato

~~~~ typescript
interface  ConfigManager {
  get(key: string, container: string): string | number | boolean | object | undefined
}
~~~~

## Implementação
Ao implementar a classe de exposição, é importante que os métodos de inclusão funcionem de forma que não permita overwrite das configurações por segurança.

### Exemplo de uso baseado na interface de implementação

~~~~ typescript
const configManager = new ConfigManager(...ops);
// configManager.get('Key', 'Container')
configManager.get('HOST', 'MYSQL'); // localhost
configManager.get('PORT', 'APP') // 8080
configManager.get('INVALID', 'INVALID'); // undefined
configManager.get('VERSION'); // 1.0
~~~~
