<template>
  <section>
    <el-row> <el-radio v-model="radio" label="1">Normal Primary</el-radio> </el-row>
    <el-row> <el-radio disabled v-model="radio1" label="disabled">Disabled</el-radio> </el-row>
  </section>
</template>

<script src="./radio.js" />
<style lang="scss" src="./radio.scss"></style>

<docs>
  ```jsx
  <Radio />
  ```
</docs>
