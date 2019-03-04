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
import myfarmTokens from "@/temas/myfarm/tokens/_index.raw.json"

/**
 * A escala na tipografia torna mais fácil a harmonia na criação da interface.
 * Aqui voce encontra os diferentes sizes disponíveis no projeto
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

<docs>
  ```jsx
  <FontSize/>
  ```
</docs>
