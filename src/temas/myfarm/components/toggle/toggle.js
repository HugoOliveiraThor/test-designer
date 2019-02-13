/**
 * @author 'Seu nome' <seunome.oliveira@siagri.com.br>
 */

/**
 *
 * Steps guiam o usuário para concluir alguma tarefa ou seguir algum fluxo. Importante salientar que o número de etapas não pode ser inferior a 2
 * Local de onde retirou @see Veja [ElementUI Steps](https://element.eleme.io/#/en-US/component/steps)
 *
 */
import ToggleButton from "./ToggleButton"
import tokens from "../../tokens/_index.json"
export default {
  name: "CnxToogle",
  element: "N/A",
  status: "prototype",
  release: "0.0.1",
  components: {
    ToggleButton,
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
      default: "#fff",
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
        console.log("Val", val)
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
