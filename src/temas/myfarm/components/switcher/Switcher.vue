<template>
  <section>
    <el-row> <el-switch active-text="Comportamento normal" v-model="value1"> </el-switch> </el-row>
    <br />
    <el-row> <el-switch active-text="Desativado" v-model="value6" disabled> </el-switch> </el-row>
  </section>
</template>

<script src="./switch.js" />
<style lang="scss" src="./switch.scss"></style>

<docs>
  ```jsx
  <Switcher />
  ```
</docs>
