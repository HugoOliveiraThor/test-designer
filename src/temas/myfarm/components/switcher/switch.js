/**
 * @author Hugo Oliveira <hugo.oliveira@siagri.com.br>
 */

/**
 * Switches são geralmente usados ​​para selecionar opções sejam unitários ou em grupos.
 *
 * @see Veja [ElementUI Switch](https://element.eleme.io/#/en-US/component/checkbox)
 */

export default {
  name: "cnx-swticher",
  element: "<el-switch/>",
  status: "prototype",
  release: "0.0.1",
  data() {
    return {
      value1: true,
      value2: true,
      value6: true,
      value7: false,
    }
  },
  props: {
    /**
     * @model
     *
     */
    value: String,
  },
  watch: {
    value1: function(val) {
      console.log("Trocou valor", val)
      alert(`Testando troca componentes----${val}`)
    },
  },
  methods: {},
}
