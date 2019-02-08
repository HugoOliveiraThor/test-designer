<template>
  <section>
    <el-steps :active="active" finish-status="success">
      <el-step title="Primeiro"></el-step>
      <el-step title="Segundo"></el-step>
      <el-step title="Terceiro"></el-step>
    </el-steps>
    <el-button style="margin-top: 12px;" @click="next">Próximo etapa</el-button>
    <br />
    <hr />
    <div style="height: 300px;">
      <el-steps direction="vertical" :active="1">
        <el-step title="Primeiro"></el-step>
        <el-step title="Segundo"></el-step>
        <el-step title="Terceiro"></el-step>
      </el-steps>
    </div>
  </section>
</template>

<script src="./scripts.js" />
<style lang="scss" src="./styles.scss"></style>

<docs>
  ```jsx
  <Steps />
  ```
</docs>
