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

## Onde estão as coisas ?

É importante conhecer onde estão e para que servem as diversas pastas que existe dentro do projeto.

- Os componentes estão localizados em "src/temas/_nome do tema_/components"

### Agora vamos entender como são criados os tokens dentro do assets:

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

- Comandos que voce vai usar :

`npm run start` - Roda o styleguide com o tema padrão do myfarm e observa as mudanças dentro do nosso src, gera os tokens.

`npm run build:system` - Com esse comando voce gerará o arquivos dist com o tema default myfarm,nesse processo tudo que é preciso para ter seu seu build pronto será realizado.**_Não é preciso realizar nenhuma nova etapa._**

``

```javascript
"scripts": {
    "dev": "webpack-dev-server --inline --config ./build/webpack.dev.conf.js",
    "start": "npm-run-all --parallel styleguide theme:myfarm:onchange theme:myfarm dev",
    "unit": "jest --config ./test/unit/jest.conf.js --coverage",
    "build": "npm-run-all theme:default node:build",
    "build:app": "npm run build",
    "build:system": "npm-run-all --sequential generate:tokens:myfarm generateTheme node:build:system update:version",
    "build:docs": "npm-run-all theme:default styleguide:build",
    "lint": "eslint '**/*.{js,vue}' --cache",
    "node:build": "node ./build/build.js",
    "node:build:system": "node ./build/build-system.js",
    "styleguide": "vue-styleguidist server --open --config ./config/docs.config.js",
    "styleguide:onchange": "onchange \"./config/*.js\" -- npm-run-all styleguide",
    "styleguide:build": "vue-styleguidist build \"./config/docs.config.js\" -- npm run theo",
    "theme": "npm-run-all --parallel theme:myfarm theme:default theme:blueflow",
    "generateTheme": "et --config ./src/temas/myfarm/variables/element-variables.scss --out ./src/temas/myfarm/styles/",
    "watchTeme:myfarm": "et --watch --config ./src/temas/myfarm/variables/element-variables.scss --out ./src/temas/myfarm/styles/",
    "theme:onchange": "npm-run-all --parallel theme:myfarm:onchange theme:default:onchange theme:blueflow:onchange",
    "generate:tokens:myfarm": "npm-run-all --parallel theme:myfarm theme:myfarm:node",
    "theme:myfarm": "theo ./src/temas/myfarm/yml/_index.yml --transform web --format map.scss,scss,raw.json,json --dest ./src/temas/myfarm/tokens ",
    "theme:myfarm:node": "theo ./src/temas/myfarm/yml/_index.yml --transform web --format map.scss,scss,raw.json,json --dest node_modules/element-theme-chalk/src/tokens",
    "theme:myfarm:onchange": "onchange \"./src/temas/myfarm/yml/*.yml\" -- npm run theo",
    "update:version": "npm --no-git-tag-version version patch"
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

## Componentes

**Chegamos a parte mais interessante, vamos agora falar sobre como criar nossos componentes:**(ง •̀\_•́)ง

- Na raiz de nosso projeto temos o nosso arquivo gulpfile.js ele nos oferece alguns processos para facilitar nosso desenvolvimento .
  _O mais simples é para criação de um novo componente_:

Vamos executar o seguinte comando no terminal:

```javascript
 gulp newComponent --nameComponent "meuNovoComponente" --nameTheme "NomeDoTemaQueQueroCriarOComponente"
```

O processo que ocorre é bem simples pois essa task copia uma estrutura de arquivos e adiciona ao seu caminho que voce definou ;)

```javascript
/**
 * There is some defaults options used here
 * Ex: gulp newComponent --nameComponent "select" --nameTheme "myfarm"
 * @params nameComponent
 * @params nameTheme
 */

gulp.task("newComponent", async function() {
  // This task pass name of the component
  let nameComponent = defaults(args.nameComponent)
  let nameTheme = defaults(args.nameTheme)
  gulp
    .src(["./src/boilerplate-component/*"])
    .pipe(gulp.dest("./src/temas/" + nameTheme + "/components/" + nameComponent + "/"))
})
```

**Próxima etapa vamos construir nosso componente**

O seu componente ele deve ser composta da sequinte estrutura : **_cnx-componente.js - cnx-component.vue - styles.scss_**

**_Vamos aos arquivos, vamos comecar com nosso arquivo JS_**

- O conteudo que estiver comentando anterior ao export default será a descrição a ser apresentado na abertura do componente .
- O conteudo que estiver dentro de cada props vai ser a description que é apresentada na lista de props do componente

**Muita atenção ao nosso export**

- **_name_** : Nome do nosso componente
- **_status_** : Status do desenvolvimento do nosso componente. Temos essa opções -> **['ready','review','deprecated','prototype']**, somente esses opções serão aceitas.
- **_release_** : Qual a versão de nosso componente, essa opção está livre na criação, recomendo bom senso e controle das releases.
- **_type_** : Essa opção dentro do props permite definir qual o tipo do nosso componente. Podemos escrever o componente de maneira tradicional ou podemos utilizar a seguinte sintaxe:

```javascript
<template>
  <component :is="type" class="wrapper">
    <slot/>
  </component>
</template>
```

Onde nosso **_type_** define quem é nosso componente, por exemplo **_el-button_** ou **_div_**.

Não é obrigatório essa sintaxe podemos trabalhar com a criação de componentes tradicional.(**_Recomendo essa_**)

```javascript
<template>
  <el-button type="primary">Primary</el-button>
</template>
```

- **_validator_** : Onde podemos definir nossas validações.

- Para se utilizar um v-model segue exemplo :

```javascript
/**
     * @model
     *
     */
    value: String,
```

```javascript
/**
 * @author SeuNome <seuEmal@mail.com.br>
 */

/*
 * Botões são geralmente usados ​​para ações de interface.
 * Use os botões personalizados para ações em formulários, diálogos e outras coisas. Lembrando que esse componente tem suporte a escolha de    tamanhos, estados e muito mais
 */

export default {
  name: "cnx-button",
  status: "prototype",
  release: "0.0.1",
  props: {
    /**
     * @model
     *
     */
    value: {
      type: [Number, String],
      default: 0,
    },
    /**
     * O elemento referente ao HTML.
     * `button`
     */
    type: {
      type: String,
      default: "el-button",
    },
    /**
     * O tamanho do botão . O valor default é medium
     * `medium, small, mini`
     */
    size: {
      type: String,
      default: "medium",
      validator: value => {
        return value.match(/(medium|small|mini)/)
      },
    },
    /**
     * Determina se é o botão é redondo
     * `true, false`
     */
    round: {
      type: Boolean,
      required: false,
      default: false,
    },
    /**
     * Determina se o botão é um circulo
     * `true, false`
     */
    circle: {
      type: Boolean,
      default: false,
    },
    /**
     * Habilita o focus no campo
     * `true, false`
     */
    autofocus: {
      type: Boolean,
      default: false,
    },
    /**
     * Habilita se apresenta loading ou não.
     * `true, false`
     */
    loading: {
      type: Boolean,
      default: false,
    },
    /**
     * Seta o tipo do botão.
     */
    submit: {
      type: String,
      default: null,
      validator: value => {
        return value.match(/(null|submit)/)
      },
    },
  },
}
```

**Agora vamos conhecer nosso arquivo VUE**:

- Em nosso modelo temos os arquivos JS e SCSS separados, portanto dentro de nosso arquivo principal devemos importa-los.

```javascript
<template>
  <section>
    <el-row>
      <el-button type="primary active">Primary</el-button>
    </el-row>
  </section>
</template>

<script src="./button.js" />
<style lang="scss" src="./button.scss"></style>
```

**_ Para apresentar um exemplo do nosso componente é preciso usar uma tag especial:_**

- Voce deve envolver o código com tag "` <doc> ```jsx <SeuComponente></SeuComponente> ```</doc> `"
- Feito isso voce terá disponível uma representação dele:

  ```jsx
  <cnx-button />
  ```

  **_ Observe que nesse caso estou renderizando um componente que já existe dentro de nosso SDK -> Componente(cnx-button)_**

**Com isso acredito que você já esteja com as principais informações para trabalhar com nosso SDK ao seu alcançe. Boa sorte (ง •̀\_•́)ง**
