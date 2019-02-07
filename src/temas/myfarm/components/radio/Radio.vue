<template>
  <section>
    <el-row>
      <el-radio v-model="radio" label="1">Normal Primary</el-radio>
      <el-radio v-model="radio" label="2">Normal Secondary</el-radio>
    </el-row>
    <el-row> <el-radio disabled v-model="radio1" label="disabled">Disabled</el-radio> </el-row>
  </section>
</template>

<script src="./radio.js" />
<!-- <style lang="scss" src="./radio.scss"></style> <style src="../../styles/radio.css"></style> -->

<docs>
  ```jsx
  <Radio />
  ```
</docs>
