<template>
  <div class="font-sizes">
    <div
      v-for="(prop, index) in tokenProps"
      :key="index"
      class="font"
      v-if="prop.category === 'font-size'"
      :style="{ fontSize: prop.value }"
    >
      ${{ prop.name.replace(/_/g, "-") }} <span>Um pequeno jabuti xereta viu dez ce.</span>
    </div>
  </div>
</template>

<script>
import orderBy from "lodash/orderBy"
import { getTemplateSelected } from "../../utils/helpers"
import defaultTokens from "@/assets/themes/default/tokens/_index.raw.json"
import myfarmTokens from "@/assets/themes/myfarm/tokens/_index.raw.json"

/**
 * This typographic scale makes it easier to achieve visual harmony in the
 * interface. It’s purposefully designed to keep the number of separate font
 * sizes to a minimum. To edit font-sizes, see
 * [/src/tokens/font-size.yml](https://github.com/viljamis/conexa-sdk-ui/blob/master/src/tokens/font-size.yml).
 */
export default {
  name: "FontSize",
  methods: {
    orderData: function(data) {
      let order = orderBy(data, "value", "desc")
      return order
    },
  },
  computed: {
    tokenProps() {
      switch (getTemplateSelected()) {
        case "Blue":
          return this.orderData(defaultTokens.props)
          break
        case "MyFarm":
          return this.orderData(myfarmTokens.props)
          break
        default:
          return this.orderData(defaultTokens.props)
          break
      }
    },
  },
  mounted() {
    switch (getTemplateSelected()) {
      case "Blue":
        require("style-loader!../../../src/themes/blueflow/_variables.scss")
        break
      case "MyFarm":
        require("style-loader!../../../src/themes/myfarm/_variables.scss")
        break
      default:
        require("style-loader!../../../src/themes/default/_variables.scss")
        break
    }
  },
}
</script>

<!--
<style lang="scss" scoped>
@import "../../docs.tokens.scss";

/* STYLES
--------------------------------------------- */

.font-sizes {
  margin-top: $space-l;
  overflow: hidden;
  width: 100%;
}
.font {
  @include reset;
  font-family: $font-heading;
  font-weight: $weight-bold;
  line-height: $line-height-xs;
  color: $color-grey-dark;
  margin-bottom: $space-s;
  font-style: normal;
  span {
    letter-spacing: -0.02em;
    margin-left: 10px;
    font-weight: $weight-normal;
    color: $color-silver;
    user-select: none;
    font-style: normal;
  }
}
</style>
-->
<docs>
  ```jsx
  <FontSize/>
  ```
</docs>
