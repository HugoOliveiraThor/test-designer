/** 
Entradas são usadas para permitir que os usuários forneçam entrada de texto quando o esperado
entrada é curta. Form Input tem um leque de opções e suporta vários textos
formatos incluindo números. Para uma entrada mais longa, use o elemento `Textarea` do formulário. */

export default {
  name: "cnx-input",
  // status: "prototype",
  // release: "0.0.1",
  data() {
    return {
      labelPosition: "right",
      formLabelAlign: {
        name: "",
      },
      ruleForm: {
        name: "",
        region: "",
        date1: "",
        date2: "",
        delivery: false,
        type: [],
        resource: "",
        desc: "",
        normal: "",
        erro: "",
        value1: "",
      },
      rules: {
        region: [{ required: true, message: "Please select Activity zone", trigger: "change" }],
        erro: [
          { required: true, message: this.upperCaseString("erro com uppercase"), trigger: "blur" },
          { min: 3, max: 5, message: "Length should be 3 to 5", trigger: "blur" },
        ],
        date1: [{ type: "date", required: true, message: "Please pick a date", trigger: "change" }],
        date2: [{ type: "date", required: true, message: "Please pick a time", trigger: "change" }],
        type: [
          {
            type: "array",
            required: true,
            message: "Please select at least one activity type",
            trigger: "change",
          },
        ],
        resource: [
          { required: true, message: "Please select activity resource", trigger: "change" },
        ],
        desc: [{ required: true, message: "Please input activity form", trigger: "blur" }],
      },
    }
  },
  props: {
    /**
     * The type of the form input field.
     * `text, number, email`
     */
    type: {
      type: String,
      default: "text",
      validator: value => {
        return value.match(/(text|number|email)/)
      },
    },
    /**
     * Text value of the form input field.
     */
    value: {
      type: String,
      default: null,
    },
    /**
     * Could be an object or a single value.
     */
    object: {
      type: String || Object,
      default: null,
    },
    /**
     * The placeholder value for the form input field.
     */
    placeholder: {
      type: String,
      default: null,
    },
    /**
     * The label of the form input field.
     */
    label: {
      type: String,
      default: null,
    },
    /**
     * The html element name used for the wrapper.
     * `div, section`
     */
    wrapper: {
      type: String,
      default: "div",
      validator: value => {
        return value.match(/(div|section)/)
      },
    },
    /**
     * The width of the form input field.
     * `medium`
     */
    size: {
      type: String,
      default: "medium",
      validator: value => {
        return value.match(/(auto|medium)/)
      },
    },
    /**
     * Whether the form input field is disabled or not.
     * `true, false`
     */
    disabled: {
      type: Boolean,
      default: false,
    },
    /**
     * Manually trigger various states of the input.
     * `hover, active, focus`
     */
    state: {
      type: String,
      default: null,
      validator: value => {
        return value.match(/(hover|active|focus)/)
      },
    },
  },
  methods: {
    onInput(value) {
      this.$emit("change", value)
    },
    onFocus(value) {
      this.$emit("focus", value)
    },
    submitForm(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          alert("submit!")
        } else {
          console.log("error submit!!")
          return false
        }
      })
    },
    upperCaseString(string) {
      return string.toUpperCase()
    },
    resetForm(formName) {
      this.$refs[formName].resetFields()
    },
  },
}
