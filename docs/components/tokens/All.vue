<template>
  <div class="all-tokens">
    <table>
      <thead>
        <tr>
          <th>Nome do token</th>
          <th>Valor</th>
          <th>Categoria</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(token, index) in tokens" :key="index" class="token">
          <td v-if="token.name">
            <code class="name">${{ token.name.replace(/_/g, "-") }}</code>
          </td>
          <td v-else>N/A</td>
          <td v-if="token.value">
            <div
              v-if="token.type === 'color'"
              class="example color"
              :style="{ backgroundColor: token.value }"
            />
            <div
              v-if="token.category === 'border-radius'"
              class="example border-radius"
              :style="{ borderRadius: token.value }"
            />
            <div
              v-if="token.category === 'box-shadow'"
              class="example box-shadow"
              :style="{ boxShadow: token.value }"
            />
            <code class="type">{{ token.value }}</code>
          </td>
          <td v-else>N/A</td>
          <td v-if="token.category">{{ token.category }}</td>
          <td v-else>N/A</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import { getTemplateSelected } from "../../utils/helpers"
import myfarmTokens from "@/temas/myfarm/tokens/_index.raw.json"
import orderBy from "lodash/orderBy"

/**
 * A lista de todos os design tokens do myfarm. Use esse token para substituir valores hard-coded e com isso manter o sistema consiso e de fácil manutenção.
 * Para editar esses tokens e adicionar mais vá em
 * /src/temas/myfarm/"arquivo .yml que deseja alterar".
 */
export default {
  name: "All",
  methods: {
    orderData: data => {
      let byName = orderBy(data, "name", "asc")
      let byCategoryAndName = orderBy(byName, "category")
      return byCategoryAndName
    },
  },
  computed: {
    tokens() {
      switch (getTemplateSelected()) {
        case "MyFarm":
          return this.orderData(myfarmTokens.props)
          break
        default:
          return this.orderData(myfarmTokens.props)
          break
      }
    },
  },
}
</script>

<style lang="scss" scoped>
@import "../../docs.tokens.scss";

/* STYLES
--------------------------------------------- */

.all-tokens {
  @include reset;
  margin-top: $space-l;
  font-family: $font-heading;
  font-weight: $weight-normal;
  line-height: $line-height-xs;
  color: $color-grey-dark;
  margin-bottom: $space-s;
  font-style: normal;
  @media (max-width: 1000px) {
    overflow-x: auto;
  }
  table {
    border-collapse: collapse;
    border-spacing: 0;
    width: 100%;
  }
  thead th {
    padding: $space-s $space-l $space-s $space-s;
    background: $color-cloud;
    font-size: $size-s;
    font-weight: $weight-bold;
    color: $color-oxford-blue;
    text-transform: uppercase;
    letter-spacing: 1px;
    font-weight: $weight-semi-bold;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: left;
    // Chrome has a bug related to thead, this only works on th:
    position: -webkit-sticky;
    position: sticky;
    top: -1px;
    &:first-child {
      border-top-left-radius: $radius-default;
      border-bottom-left-radius: $radius-default;
    }
    &:last-child {
      border-top-right-radius: $radius-default;
      border-bottom-right-radius: $radius-default;
    }
  }
  tr {
    border-bottom: 1px solid #dfe3e6;
    &:last-child {
      border: 0;
    }
  }
  td {
    font-size: $size-s;
    padding: $space-s $space-l $space-s $space-s;
    &:first-child {
      font-weight: $weight-bold;
      white-space: nowrap;
    }
  }
  .type {
    line-height: $line-height-s;
    max-width: calc(100% - #{$space-m});
    float: left;
  }
  .example {
    @include inline-space($space-xs);
    border-radius: $radius-default;
    background: $color-white;
    box-shadow: $shadow-s-inset, $shadow-s-inset, $shadow-s-inset;
    margin-top: $space-xx-small;
    width: $space-s;
    height: $space-s;
    float: left;
  }
}
</style>

<docs>
  ```jsx
  <all/>
  ```
</docs>
