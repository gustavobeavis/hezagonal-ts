# DOMAIN
Essa camada tem como objetivo separar a nível de negócio uma implementação de modo que se reduza o acoplamento entre regras de negocio e demais componentes de infraestrutura ou serviço.

Entende-se como dominio uma parte de algo maior, que consegue sobreviver sem a ligação direta de outro domínio de negócio, e que aplique uma jornada dentro de um escopo especifico do sistema.

## Estrutura
Podemos estruturar o domínio em algumas pastas para balizara a soluão, sendo elas:
- services/
- model.ts ou models/
- clients/
- error.ts ou errors/
- service.ts
- index.ts

### Services/
Essa pasta tem o objetivo de isolar os subservios do seu domínio principal, de modo que se reduza a complexidade de implementação, sempre assumindo que o serviço exposto será utilizado pela classe de serviço principal, não se esquecendo que dentro de cada serviço podem conter subserviços que tem a finalidade de orquestrar o domínio de um determinado serviço de modo que se reduza a complecidade da classe final a ser exposta para consumo.

Todos os serviços devem ser estruturados com pastas isoladas para sua implementação, bem como em cada pasta deve conter um index com o contrato de interface para consumo, de modo que o que há para ser exposto é a sua implementação, podendo ter internamente diversas implementações distintas de uma mesma interface, e fica a cargo do orquestrador definir a mais apropriada.

É igualmente importante ressaltar que cada serviço, tenha uma pasta ou arquivo centralizando os erros de seu próprio contexto.

### Model ou models/
Nessa poasta ou arquivo deve ter todos os contratos de objetos que serão utilizados interna e externamente pelo domínio, essas models corresponde ao mapeamento de objetos apenas, não deve conter métodos e implementções que remetam a uma classe. Bem como toda model definida.

### Clients/
Nessa pasta serão mapeadas todas as interfaces dos provedores de serviço que o dominio precisa, em casos de clientes que atendam a mais de um domínio, essa interface pode ser apenas uma referência a um client comum.

### error.ts ou errors/
Essa pasta ou arquivo deve conter os erros da classe principal do serviço orquestrador, assumindo erros a nível de negócio

### service.ts
Essa classe deve orquestrar o consumo dos serviços, clients de modo que entrege um método ou conjunto de métodos a serem expostos pelo domínio. Assumindo que essa é a única classe a ser exposta pelo domínio.

### index.ts
Esse arquivo deve conter a interface da classe de serviço principal a ser exposta.
