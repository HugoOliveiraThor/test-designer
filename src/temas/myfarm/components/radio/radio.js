/**
 * @author Hugo Oliveira <hugo.oliveira@siagri.com.br>
 */

/**
 * Checkboxs são geralmente usados ​​para selecionar opções sejam unitários ou em grupos.
 *
 * @see Veja [ElementUI Radio](https://element.eleme.io/#/en-US/component/radio)
 */

export default {
  name: "cnx-radio",
  element: "<el-radio/>",
  status: "prototype",
  release: "0.0.1",
  data() {
    return {
      radio: "1",
      radio1: "selected and disabled",
    }
  },
  props: {
    /**
     * @model
     *
     */
    value: String,
    /**
     * O elemento referente ao HTML.
     * `checkbox`
     */
    type: {
      type: String,
      default: "checkbox",
    },
    /**
     * Manually trigger various states of the checkbox.
     * `disabled, checked`
     */
    state: {
      type: String,
      default: null,
      validator: value => {
        return value.match(/(disabled|checked)/)
      },
    },
    /**
     * Eventos do checkbox.
     * Dispara quando se clica em cima do checkbox
     */
    change: {
      type: Function,
      default: event => {
        console.log("You have clicked here my friend!", event.target)
      },
    },
  },
}
