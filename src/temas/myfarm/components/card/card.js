/**
 * @author Hugo Oliveira <hugo.oliveira@siagri.com.br>
 */

/**
 * Cards são geralmente usados ​selecionar opções sejam unitários ou em grupos.
 *
 * @see Veja [ElementUI Checkbox](https://element.eleme.io/#/en-US/component/checkbox)
 */

export default {
  name: "Card",
  element: "<el-card/>",
  status: "prototype",
  release: "0.0.1",
  data() {
    return {
      checked: true,
      checkList: ["selected and disabled", "Option A"],
    }
  },
  props: {
    /**
     * @model
     *
     */
    value: String,
  },
}
