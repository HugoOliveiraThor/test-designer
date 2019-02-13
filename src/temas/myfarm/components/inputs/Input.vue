<template>
  <section>
    <el-form
      :model="ruleForm"
      label-position="top"
      :rules="rules"
      ref="ruleForm"
      label-width="120px"
      class="demo-ruleForm"
    >
      <el-form-item label="Normal">
        <el-input v-model="ruleForm.value1" autocomplete="off" placeholder=""></el-input>
      </el-form-item>
      <br />
      <el-form-item label="Disabled">
        <el-input placeholder="" v-model="value2" :disabled="true"> </el-input>
      </el-form-item>
      <br />
      <el-form-item label="Focus primario">
        <el-input placeholder="Focus primário" v-model="value3" :disabled="true"> </el-input>
      </el-form-item>
      <br />
      <el-form-item>
        <el-input placeholder="Alerta" v-model="value4" :disabled="true"> </el-input>
      </el-form-item>
      <br />
      <el-form-item prop="erro">
        <el-input placeholder="Erro" v-model="ruleForm.erro"> </el-input>
      </el-form-item>
      <br />
      <el-form-item>
        <el-input placeholder="Sucesso" v-model="value6" type="success"> </el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="submitForm('ruleForm')">Testar form</el-button>
        <el-button @click="resetForm('ruleForm')">Limpar os campos</el-button>
      </el-form-item>
    </el-form>
  </section>
</template>

<script src="./input.js" />
<!-- <style src="../../styles/index.css"></style> -->

<docs>
  ```jsx
  <Input />
  ```
</docs>
