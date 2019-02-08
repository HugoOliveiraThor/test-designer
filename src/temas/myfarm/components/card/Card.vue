<template>
  <el-card class="box-card">
    <div slot="header" class="clearfix">
      <span>Exemplo de Header</span>
      <el-button style="float: right; padding: 3px 0" type="text"
        >Simulando um icone ou botão</el-button
      >
    </div>
    <div v-for="o in 4" :key="o" class="text item">{{ "List item " + o }}</div>
  </el-card>
</template>

<script src="./card.scss"></script>
<script src="./card.js"></script>
<docs>

  ```jsx
  <Card />
  ```
</docs>
