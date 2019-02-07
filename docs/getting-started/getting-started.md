### Conexa SDK UI é uma ferramentada para construir aplicações com Vue.js, que prove ferramentas organizadas, padrões e práticas que funcionam como nosso fundamento de desenvolvimento de aplicações.

## Instalação - Documentação em desenvolvimento

A instalação é feita de maneira bem simples.Você irá instalar como uma dependência do seu projeto npm install "conexa-ui".

A partir disso você terá acesso ao diferentes temas presentes do ConexaUI. A maneira mais simples e na raiz do seu projeto (main.js- default) importar o css com o tema que será utilizado no projeto.

Segue exemplo:

- import Vue from 'vue'
- import { Mainconfig } from '@/core/config'
- import { store } from '@/core/store'
- import router from '@/core/router'
- import ElementUi from 'element-ui'
- import 'conexa-ui/dist/temas/myfarm.css' <-- Nossa CONEXA - first

As classes do ElementUI serão sobrescritas pelo nosso framework

## Onde estão as coisas?

É importante depois de baixar o projeto rodar o comando `npm run theme` para iniciar os tokens dos temas. Vou ajeitar para fazer automático na hora de dar o `npm install`

É importante conhecer onde estão e para que servem as diversas pastas que existe dentro do projeto.

Os componentes estão localizados em "src/components" -> vou mudar para components

Nos assets estão os tokens com os scss dos diversos temas.

### Agora vamos entender como são criados os tokens dentro do assets :

Dentro de src/temas/'temas escolhido' temos todos os nossos yml files. A partir dele serão criadas as nossas variáveis. Voce verá os seguintes arquivos

- \_index.yml
- border-radius.yml
- color.yml

Todas as configurações de variáveis deverão ser feitas dentro desses arquivos, é interessante seguir o padrão já utilizado e bom senso na criação das variáveis.

O que voce vai encontrar em cada arquivo, vamos pegar o exemplo color.yml:
Lembrando que no yml nos temos conceito de chave, valor. (•‿•)

```yml
#
# COLOR TOKENS
# Use these tokens to set a color.
# For reference, see http://hslpicker.com/
#
# To make things a little simpler for your team,
# utilize both global & local tokens for colors.
#

aliases:
  primary:
    value: "#FF7639"
  secondary:
    value: "#00938f"
  support:
    value: "#00938f"
  status:
    value: "#f95c75"
  grey:
    value: "#eeeff1"
  white:
    value: "#fff"
props:
  color_primary:
    value: "#FF7639"
    category: brand
    order: 000
  color_secondary:
    value: "#00938f"
    category: brand
    order: 000
```

Quando rodarmos o nosso comando de start do nosso npm run start ele irá verificar esse arquivo para alterações e criará dentro de `src/temas/'seu-tema/tokens'` os arquivos:

- \_index.json
- \_index.map.scss
- \_index.raw.json
- \_index.scss

Não altere diretamentes esses arquivos a cada npm start eles serão reescritos!! (ง •̀\_•́)ง

### Pasta Config

Essa pasta possui o arquivo de configuração do nosso itens da nossa lista de Menu , as tabs, os arquivos markdown que serão lidos.

- config -> docs.config.js

- Voce verá a seguinte estrutura :

```javascript
/**
   * Enabling the following option splits sections into separate views.
   */
  pagePerSection: true,
  sections: [
    {
      name: "Sobre Conexa UI",
      content: "../docs/overview.md",
      exampleMode: "hide",
      sectionDepth: 1,
      sections:[
            {
              name: "Myfarm",
              components: "../docs/components/status/Components.vue",
              exampleMode: "hide",
              usageMode: "hide",
            }
          ]
    },
    name: "Temas",
      content: "../docs/themes/themes.md",
      exampleMode: "expand",
      usageMode: "expand",
      sectionDepth: 2,
      sections: [
        {
          name: "MyFarm",
          content: "../docs/themes/myfarm/myfarm.md",
          exampleMode: "expand",
          usageMode: "expand",
          sections: [
            {
              name: "Design Tokens",
              content: "../docs/design-tokens/tokens.md",
              theme: "my-farm",
              sectionDepth: 1,
              exampleMode: "expand",
              usageMode: "expand",
              components: () => [
                "../docs/components/tokens/Color.vue",
                "../docs/components/tokens/FontSize.vue",
                "../docs/components/tokens/Spacing.vue",
                "../docs/components/tokens/All.vue",
              ],
            },
            {
              name: "Componentes",
              content: "../docs/themes/myfarm/components.md",
              components: "../src/components/**/[A-Z]*.vue",
              usageMode: "expand",
              exampleMode: "expand",
              sectionDepth: 2,
            },
          ],
        }
....
```

Essa é nossa estrutura do menu que vertical com os itens e seus subItens.

- `name` : Nome que é apresentado no menu.
- `content`: É o arquivo .md que queremos que seja apresentado ao clicar no item no menu.
- `exampleMode` : Tenho que entender essa parte da estrutura ainda melhor ;)
- `sections` : È onde trabalhamos com os subItens da nossa árvore
- `components` : Pode ser um array de components Vue ou podemos fazer uma varredura dentro de uma pasta e extrair os compontes dela .
  Exemplo de trazer componentes array:

```javascript
components: () => [
                "../docs/components/tokens/Color.vue",
                "../docs/components/tokens/FontSize.vue",
                "../docs/components/tokens/Spacing.vue",
                "../docs/components/tokens/All.vue",
              ],
```

Exemplo de varrer uma pasta e retornar os componentes:

```javascript
components: "../src/components/**/[A-Z]*.vue",
```

### Vamos aos nossos comandos para inicializar o projeto: Nosso famoso package.json

- Vamos ainda simplificar esses comandos arquivos para facilitar.
- Mas pelos scripts já é possível visualizar os comandos que podem ser utilizados.
- Comandos que voce vai usar :

`npm run start` - Roda o styleguide com o tema padrão do myfarm e observa as mudanças dentro do nosso src.

`npm run build:system` - Com esse comando voce gerará o arquivos dist com o tema default myfarm.

``

```javascript
"scripts": {
    "start": "npm-run-all --parallel styleguide theme:myfarm:onchange theme:myfarm dev",
    "build": "npm-run-all theme:default node:build",
    "build:app": "npm run build",
    "build:system": "npm-run-all theme:myfarm node:build:system",
    "build:docs": "npm-run-all theme:default styleguide:build",
    "lint": "eslint '**/*.{js,vue}' --cache",
    "node:build": "node ./build/build.js",
    "node:build:system": "node ./build/build-system.js",
    "styleguide": "vue-styleguidist server --open --config ./config/docs.config.js",
    "styleguide:onchange": "onchange \"./config/*.js\" -- npm-run-all styleguide",
    "styleguide:build": "vue-styleguidist build \"./config/docs.config.js\" -- npm run theo",
    "theme": "npm-run-all --parallel theme:myfarm theme:default theme:blueflow",
    "theme:onchange": "npm-run-all --parallel theme:myfarm:onchange theme:default:onchange theme:blueflow:onchange",
    "theme:default": "theo ./src/themes/default/tokens/_index.yml --transform web --format map.scss,scss,raw.json,json --dest ./src/assets/themes/default/tokens",
    "theme:default:onchange": "onchange \"./src/themes/default/tokens/*.yml\" -- npm run theo",
    "theme:myfarm": "theo ./src/themes/myfarm/tokens/_index.yml --transform web --format map.scss,scss,raw.json,json --dest ./src/assets/themes/myfarm/tokens",
    "theme:myfarm:onchange": "onchange \"./src/themes/myfarm/tokens/*.yml\" -- npm run theo",
    "theme:blueflow": "theo ./src/themes/blueflow/tokens/_index.yml --transform web --format map.scss,scss,raw.json,json --dest ./src/assets/themes/blueflow/tokens",
    "theme:blueflow:onchange": "onchange \"./src/themes/blueflow/tokens/*.yml\" -- npm run theo",
    "test": "npm-run-all theme:default unit"
  },
```

### Temas

Nessa aba teremos acessos ao temas disponíveis dentro do nosso framework

- Temos a estrutura
  - Temas
    - Design Tokens
    - Color
    - FontSize
    - Spacing
    - All
  - Componentes
    - Button
    - Card
    - etc......

Ao selecionar o item Design Tokens , voce verá todas as informações dos tokens disponíveis no tema selecionado. Paletas de cores , fontSize e no final All tokens que é a junção de todos os elementos disponíveis na UI.

#### Componentes:

A parte mais importante do nosso framework, voce encontrará toda as informações sobre o componente a ser utilizado.
Voce verá um exemplo de como será o comportamento do componente, suas props, valores default etc...

[![MyFarm Theme](/img/example-component.png)](#/Themes/Blue)
