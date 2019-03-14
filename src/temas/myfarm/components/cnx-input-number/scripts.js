/**
 * @author 'Hugo Oliveira' <seunome.oliveira@siagri.com.br>
 */

/**
 *
 * Ex: Input Numbers são geralmente usados ​​selecionar opções sejam unitários ou em grupos.
 *
 *
 */
import { moedaParaNumero, numeroParaMoeda } from "../../helpers/utils/monetary"
export default {
  name: "cnx-input-number",
  status: "ready",
  release: "0.0.1",
  props: {
    /**
     * @model
     *
     */
    value: {
      type: [Number, String],
      default: 0,
    },
    /**
     * Define modo de leitura
     * Por padrão é false
     *
     */
    readonly: {
      type: Boolean,
      default: () => false,
    },
    /**
     * Define modo de leitura
     * Por padrão é false
     *
     */
    size: {
      type: String,
      default: "normal",
    },
    /**
     * Define modo de leitura
     * Por padrão é false
     *
     */
    thousands: {
      type: String,
      default: "",
    },
    /**
     * Define precisão das casas
     *
     *
     */
    precision: {
      type: Number,
      default: 2,
    },
    /**
     * Define suffixo no input
     *
     *
     */
    suffix: {
      type: String,
      default: "",
    },
    /**
     * Define prefixo no input
     */
    prefix: {
      type: String,
      default: "",
    },
    /**
     * Define valor inicial do input
     */
    initialValue: {
      type: [Number, String],
      default: 0,
    },
    /**
     * Define valor mínimo no input
     */
    min: {
      type: Number,
      default: 999999999,
    },
    /**
     * Define valor máximo no input
     */
    max: {
      type: Number,
      default: 999999999,
    },
  },
  data() {
    return {
      valor: 0,
    }
  },
  mounted() {
    if (this.$slots.suffix) {
      const width = this.$slots.suffix[0].elm.clientWidth
      this.$refs.input.style.paddingRight = `${width + 20}px`
    }
  },
  updated() {
    if (this.$slots.suffix) {
      const width = this.$slots.suffix[0].elm.clientWidth
      this.$refs.input.style.paddingRight = `${width + 20}px`
    }
  },
  methods: {
    change(evt) {
      const value = moedaParaNumero(evt.target.value)
      this.$emit("input", value)
      this.$emit("change", value)
    },
  },
  watch: {
    value: {
      immediate: true,
      handler(val, oldVal) {
        this.valor = `${this.prefix}${numeroParaMoeda(val, this.precision)}${this.suffix}`
        this.$forceUpdate()
      },
    },
  },
}
