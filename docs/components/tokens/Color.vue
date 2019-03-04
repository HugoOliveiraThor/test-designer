<template>
  <div class="colors">
    <div
      v-for="(prop, index) in tokenProps"
      :key="index"
      class="color"
      :class="prop.category"
      v-if="prop.type === 'color'"
    >
      <div class="swatch" :style="{ backgroundColor: prop.value }" />
      <h3>{{ prop.name.replace(/_/g, " ").replace(/color/g, "") }}</h3>
      <span> <em>Color:</em> {{ prop.originalValue }} </span>
      <span> <em>RGB:</em> {{ prop.value }} </span>
      <span> <em>SCSS:</em> ${{ prop.name.replace(/_/g, "-") }} </span>
    </div>
  </div>
</template>

<script>
import orderBy from "lodash/orderBy"
import { getTemplateSelected } from "../../utils/helpers"
// import defaultTokens from "@/assets/themes/default/tokens/_index.raw.json"
import myfarmTokens from "@/temas/myfarm/tokens/_index.raw.json"
/**
 * Aqui voce encontra a paleta de cores com todas as cores disponíveis dentro do tema selecionado
 * [/src/tokens/color.yml](https://github.com/viljamis/vue-design-system/blob/master/src/tokens/color.yml).
 */
export default {
  name: "Color",
  status: "prototype",
  release: "3.5.0",
  methods: {
    orderData: data => {
      let byName = orderBy(data, "order", "asc")
      let byCategoryAndName = orderBy(byName, "name")
      return byName
    },
  },
  computed: {
    tokenProps() {
      switch (getTemplateSelected()) {
        case "MyFarm":
          return this.orderData(myfarmTokens.props)
          break
        default:
          return this.orderData(defaultTokens.props)
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

.colors {
  margin-top: $space-l;
  display: block;
  width: 100%;
  @supports (display: grid) {
    display: grid;
    max-width: 1200px;
    align-content: stretch;
    justify-content: left;
    grid-template-columns:
      calc(20% - #{$space-m})
      calc(20% - #{$space-m})
      calc(20% - #{$space-m})
      calc(20% - #{$space-m})
      calc(20% - #{$space-m});
    grid-column-gap: $space-m;
    @media (max-width: 1300px) {
      grid-template-columns:
        calc(25% - #{$space-m})
        calc(25% - #{$space-m})
        calc(25% - #{$space-m})
        calc(25% - #{$space-m});
    }
    @media (max-width: 1100px) {
      grid-template-columns:
        calc(33.333% - #{$space-m})
        calc(33.333% - #{$space-m})
        calc(33.333% - #{$space-m});
    }
    @media (max-width: 900px) {
      grid-template-columns:
        calc(50% - #{$space-m})
        calc(50% - #{$space-m});
    }
    @media (max-width: 400px) {
      grid-template-columns: 100%;
    }
  }
}
.swatch {
  @include stack-space($space-s);
  border-bottom: 1px solid rgba(0, 0, 0, 0.08);
  height: $space-xxl;
  margin-left: -#{$space-s};
  margin-top: -#{$space-s};
  width: calc(100% + #{$space-l});
  float: left;
}
h3 {
  @include reset;
  @include stack-space($space-xs);
  text-transform: capitalize;
  line-height: 1.2;
  width: 100%;
  float: left;
}
.color {
  @include reset;
  @include inset-space($space-s);
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  margin-bottom: $space-m;
  box-shadow: 0 0 0 1px rgba(63, 63, 68, 0.05), 0 1px 3px 0 rgba(63, 63, 68, 0.15);
  font-size: $size-s;
  font-family: $font-text;
  color: $color-grey-dark;
  border-radius: $radius-default;
  overflow: hidden;
  text-align: left;
  @supports (display: grid) {
    width: 100%;
    float: left;
  }
  @media (max-width: 400px) {
    margin-bottom: $space-m;
  }
  &:hover {
    span {
      color: $color-grey;
      em {
        color: $color-grey-dark;
      }
    }
  }
  span {
    margin-bottom: $space-xs;
    line-height: 1.3;
    color: $color-grey-dark;
    font-size: $size-s;
    width: 100%;
    float: left;
    em {
      user-select: none;
      font-style: normal;
    }
  }
}
</style>

<docs>
  ```jsx
  <color/>
  ```
</docs>
