<template>
  <section>
    <el-row>
      <el-button type="primary active" class="terapia">Primary</el-button>
      <el-button type="primary" icon="el-icon-plus">Primary with icon</el-button>
      <el-button type="info" disabled>Disabled</el-button>
      <el-button type="info" icon="el-icon-plus" disabled>Primary with icon</el-button>
    </el-row>
    <br />
    <el-row>
      <el-button>Secundário</el-button>
      <el-button icon="el-icon-plus">Default with icon</el-button>
      <el-button disabled>Disabled</el-button>
      <el-button icon="el-icon-plus" disabled>Default disabled</el-button>
    </el-row>
  </section>
</template>

<script src="./button.js" />
<style lang="scss" src="./button.scss"></style>

<docs>

  ```jsx
  <Button />
  ```
</docs>
