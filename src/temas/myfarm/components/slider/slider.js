/**
 * @author Hugo Oliveira <hugo.oliveira@siagri.com.br>
 */

/**
 * Sliders são geralmente usados ​​para selecionar opções sejam unitários ou em grupos.
 *
 * @see Veja [ElementUI Slider](https://element.eleme.io/#/en-US/component/slider)
 */

export default {
  name: "Slider",
  element: "<el-slider/>",
  status: "prototype",
  release: "0.0.1",
  data() {
    return {
      value1: 0,
      value2: 50,
      value3: 36,
      value4: 48,
      value5: 42,
    }
  },
  methods: {
    formatTooltip(val) {
      return val / 100
    },
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
  },
}
