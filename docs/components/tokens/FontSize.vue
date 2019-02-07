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
// import defaultTokens from "@/assets/themes/default/tokens/_index.raw.json"
import myfarmTokens from "@/temas/myfarm/tokens/_index.raw.json"

/**
 * This typographic scale makes it easier to achieve visual harmony in the
 * interface. It’s purposefully designed to keep the number of separate font
 * sizes to a minimum. To edit font-sizes, see
 * [/src/tokens/font-size.yml](https://github.com/viljamis/conexa-sdk-ui/blob/master/src/tokens/font-size.yml).
 */
export default {
  name: "FontSize",
  methods: {
    orderData: data => {
      let order = orderBy(data, "value", "desc")
      return order
    },
  },
  computed: {
    tokenProps() {
      switch (getTemplateSelected()) {
        // case "Blue":
        //   return this.orderData(defaultTokens.props)
        //   break
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
    // switch (getTemplateSelected()) {
    //   case "Blue":
    //     require("style-loader!../../../src/themes/blueflow/_variables.scss")
    //     break
    //   case "MyFarm":
    //     require("style-loader!../../../src/temas/myfarm/_variables.scss")
    //     break
    //   default:
    //     require("style-loader!../../../src/themes/default/_variables.scss")
    //     break
    // }
  },
}
</script>

<docs>
  ```jsx
  <FontSize/>
  ```
</docs>
