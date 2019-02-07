<template>
  <section>
    <el-checkbox v-model="checked" @change="change">Normal</el-checkbox>
    <br />
    <el-checkbox-group v-model="checkList">
      <el-checkbox label="Option A"></el-checkbox>
      <el-checkbox label="Option B"></el-checkbox>
      <el-checkbox label="Option C"></el-checkbox>
      <el-checkbox label="Desativado" disabled></el-checkbox>
      <el-checkbox label="Selecionado e Desativado" disabled></el-checkbox>
    </el-checkbox-group>
  </section>
</template>

<script src="./checkbox.js" />
<style lang="scss" src="./checkbox.scss"></style> -->

<docs>
  ```jsx
  <Checkbox />
  ```
</docs>
