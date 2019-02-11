<template>
  <el-radio-group
    class="toggle"
    :class="customClass"
    v-model="selected"
    :style="{ 'background-color': bgColor }"
  >
    <toggle-button
      :selected="firstLabel === selected || selected === true || selected === 1"
      :textColor="textColor"
      :selectedBgColor="selectedBgColor"
      :selectedTextColor="selectedTextColor"
      :label="firstLabel"
    />
    <toggle-button
      :selected="secondLabel === selected || selected === false || selected === 0"
      :textColor="textColor"
      :selectedBgColor="selectedBgColor"
      :selectedTextColor="selectedTextColor"
      :label="secondLabel"
    />
    <toggle-button
      :selected="thirdLabel === selected || selected === false || selected === 2"
      :textColor="textColor"
      :selectedBgColor="selectedBgColor"
      :selectedTextColor="selectedTextColor"
      :label="thirdLabel"
      v-show="thirdLabel !== null && thirdLabel !== ''"
    />
  </el-radio-group>
</template>

<script>
import toggleButton from "./toggle-button"

export default {
  name: "siagriToggle",
  components: {
    toggleButton,
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
      default: "#53b7a8",
    },
    selectedBgColor: {
      type: String,
      default: "#fff",
    },
    selectedTextColor: {
      type: String,
      default: "#53b7a8",
    },
    textColor: {
      type: String,
      default: "#ccc",
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
</script>
