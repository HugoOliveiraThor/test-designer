<template>
  <el-radio-group
    class="toggle"
    :class="customClass"
    v-model="selected"
    :style="{ 'background-color': bgColor }"
  >
    <cnx-toggle-button
      :selected="firstLabel === selected || selected === true || selected === 1"
      :textColor="textColor"
      :selectedBgColor="selectedBgColor"
      :selectedTextColor="selectedTextColor"
      :label="firstLabel"
    />
    <cnx-toggle-button
      :selected="secondLabel === selected || selected === false || selected === 0"
      :textColor="textColor"
      :selectedBgColor="selectedBgColor"
      :selectedTextColor="selectedTextColor"
      :label="secondLabel"
    />
    <cnx-toggle-button
      :selected="thirdLabel === selected || selected === false || selected === 2"
      :textColor="textColor"
      :selectedBgColor="selectedBgColor"
      :selectedTextColor="selectedTextColor"
      :label="thirdLabel"
      v-show="thirdLabel !== null && thirdLabel !== ''"
    />
  </el-radio-group>
</template>

<script src="./toggle.js" />
<style lang="scss" src="./toggle.scss" scoped></style>

<docs>
  ```jsx
  <cnx-toggle
    firstLabel="FirstLabel"
    secondLabel="SecondLabel"
  />
  ```
</docs>
