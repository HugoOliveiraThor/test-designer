/**
 * @author 'Hugo Oliveira' <hugo.oliveira@siagri.com.br>
 */

/**
 *
 * Toggle permite alterar entre opções e disparar eventos que podem ser usados para manipular eventos dados etc...
 *
 *
 */
import cnxToogleButton from "./cnx-toggle-button"
import tokens from "../../tokens/_index.json"
export default {
  name: "cnx-toggle",
  element: "cnx-toggle",
  status: "ready",
  release: "0.0.1",
  components: {
    cnxToogleButton,
  },
  props: {
    customClass: {
      type: String,
      default: "",
    },
    firstLabel: {
      type: String,
      default: "",
    },
    secondLabel: {
      type: String,
      default: "",
    },
    thirdLabel: {
      type: String,
      default: "",
    },
    bgColor: {
      type: String,
      default: tokens.color_grey_10,
    },
    selectedBgColor: {
      type: String,
      default: tokens.color_white,
    },
    selectedTextColor: {
      type: String,
      default: tokens.color_primary,
    },
    textColor: {
      type: String,
      default: tokens.color_grey_80,
    },
    value: {
      type: [String, Boolean, Number],
    },
    transformValue: {
      type: Boolean,
      default: false,
    },
    transformToInt: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      selected: null,
    }
  },
  methods: {
    toInt(val) {
      let self = this
      // eslint-disable-next-line no-extra-boolean-cast
      return self.transformToInt ? (val ? 1 : 0) : val
    },
    transform(val) {
      let self = this
      let transform =
        self.transformValue || self.transformToInt
          ? self.toInt(val === self.firstLabel || val === true || val === 1)
          : val
      return transform
    },
  },
  watch: {
    selected: {
      handler(val) {
        let self = this
        self.$emit("input", val)
        self.$emit("onChange", val)
      },
      immediate: true,
    },
    "$props.value": {
      handler(val) {
        let self = this
        let result = self.toInt(self.transform(val))
        self.$set(self, "selected", result)
      },
      immediate: true,
    },
  },
}
