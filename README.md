# Frontend teste ideafix
> Aplicação para criação e visualização de 'notas'.

## Funcionalidades
 1 - Dois campos por nota: Titulo e descrição.
 2 - Criação dinâmica das notas, sem limtes.
 3 - Possibilidade de exclusão das notas.
 4 - Resposivel.
 5 - As notas são salvas em um banco de dados e recuperadas, através do backend https://github.com/cmtehenz/ideafix_backend
 6 -


![caption](/assets/logo.gif)

## Instalação

Após clonar o repositório
1 - instalar os pacotes
```sh
yarn
```
2 - conforme o arquivo ormconfig.json, modificar conforme seus dados do banco de dados necessário postgress instalado.

3 - migrar os banco de dados.

```sh
yarn typeorm migration:run
```

4 - iniciar o server.

```sh
yarn dev
```

O servidor irá iniciar na porta 3333.

## Exemplo de uso

Alguns exemplos interessantes e úteis sobre como seu projeto pode ser utilizado. Adicione blocos de códigos e, se necessário, screenshots.

_Para mais exemplos, consulte a [Wiki][wiki]._


## Histórico de lançamentos

* 0.2.1
    * MUDANÇA: Atualização de docs (código do módulo permanece inalterado)
* 0.2.0
    * MUDANÇA: Remove `setDefaultXYZ()`
    * ADD: Adiciona `init()`
* 0.1.1
    * CONSERTADO: Crash quando chama `baz()` (Obrigado @NomeDoContribuidorGeneroso!)
* 0.1.0
    * O primeiro lançamento adequado
    * MUDANÇA: Renomeia `foo()` para `bar()`
* 0.0.1
    * Trabalho em andamento

## Meta

Gustavo Costa – [@SeuNome](https://twitter.com/cmtehenz) – cmtehenz@gmail.com

Distribuído sob a licença MIT. Veja `LICENSE` para mais informações.

[https://github.com/yourname/github-link](https://github.com/cmtehenz/)

## Contributing

1. Faça o _fork_ do projeto (<https://github.com/cmtehenz/ideafix_backend/fork>)
2. Crie uma _branch_ para sua modificação (`git checkout -b feature/fooBar`)
3. Faça o _commit_ (`git commit -am 'Add some fooBar'`)
4. _Push_ (`git push origin feature/fooBar`)
5. Crie um novo _Pull Request_

[npm-image]: https://img.shields.io/npm/v/datadog-metrics.svg?style=flat-square
[npm-url]: https://npmjs.org/package/datadog-metrics
[npm-downloads]: https://img.shields.io/npm/dm/datadog-metrics.svg?style=flat-square
[travis-image]: https://img.shields.io/travis/dbader/node-datadog-metrics/master.svg?style=flat-square
[travis-url]: https://travis-ci.org/dbader/node-datadog-metrics
[wiki]: https://github.com/seunome/seuprojeto/wiki
