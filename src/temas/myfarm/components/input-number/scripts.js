/**
 * @author 'Hugo Oliveira' <seunome.oliveira@siagri.com.br>
 */

/**
 *
 * Ex: Input Numbers são geralmente usados ​​para selecionar opções sejam unitários ou em grupos.
 *
 *
 */
import { moedaParaNumero, numeroParaMoeda } from "../../helpers/utils/monetary"
export default {
  name: "cnx-input-number",
  element: "<cnx-input-number/>",
  status: "prototype",
  release: "0.0.1",
  data() {
    return {}
  },
  props: {
    /**
     * @model
     *
     */
    value: String,
    readonly: {
      type: Boolean,
      default: () => false,
    },
    size: {
      type: String,
      default: "normal",
    },
    thousands: {
      type: String,
      default: "",
    },
    precision: {
      type: Number,
      default: 2,
    },
    suffix: {
      type: String,
      default: "",
    },
    prefix: {
      type: String,
      default: "",
    },
    value: {
      type: [Number, String],
      default: 0,
    },
    initialValue: {
      type: [Number, String],
      default: 0,
    },
    min: {
      type: Number,
      default: 999999999,
    },
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
