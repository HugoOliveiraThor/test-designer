<template>
  <div class="spacing">
    <div
      v-for="(prop, index) in tokens"
      :key="index"
      class="space"
      v-if="prop.category === 'space'"
      :style="{ lineHeight: prop.value, height: prop.value }"
    >
      ${{ prop.name.replace(/_/g, "-") }} <span>({{ prop.value }})</span>
    </div>
  </div>
</template>

<script>
// import defaultTokens from "@/assets/themes/default/tokens/_index.raw.json"
import { getTemplateSelected } from "../../utils/helpers"
import myfarmTokens from "@/temas/myfarm/tokens/_index.raw.json"

import orderBy from "lodash/orderBy"

/**
 * As configurações default the Padding , margin e positions
 * [/src/tokens/spacing.yml](https://github.com/viljamis/conexa-sdk-ui/blob/master/src/tokens/spacing.yml).
 */
export default {
  name: "Spacing",
  methods: {
    orderData: data => {
      let order = orderBy(data, "category", "asc")
      return order
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

.spacing {
  margin-top: $space-l;
  overflow: hidden;
  max-width: 1176px;
  width: 100%;
}
.space {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  border-radius: $radius-default;
  box-shadow: $shadow-s-inset;
  margin-bottom: $space-xs;
  font-size: $size-s;
  font-family: $font-text;
  color: $color-grey-dark;
  background: tint(#c4cdd5, 85%);
  text-align: center;
  position: relative;
  float: left;
  width: 100%;
  span {
    margin-left: 5px;
    color: $color-silver;
    user-select: none;
    font-style: normal;
  }
}
</style>

<docs>
  ```jsx
  <spacing/>
  ```
</docs>
