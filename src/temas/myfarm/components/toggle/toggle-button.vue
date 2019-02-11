<template>
  <el-radio-button
    class="toggle-button"
    :style="{
      color: selected ? selectedTextColor : textColor,
      'background-color': selected ? selectedBgColor : 'transparent',
    }"
    :label="label"
  />
</template>

<script>
export default {
  name: "Toogle-Button",
  props: {
    label: {
      type: String,
      default: "",
    },
    selectedTextColor: {
      type: String,
    },
    selectedBgColor: {
      type: String,
    },
    textColor: {
      type: String,
    },
    selected: {
      type: Boolean,
      default: false,
    },
  },
}
</script>

<style lang="scss"></style>
