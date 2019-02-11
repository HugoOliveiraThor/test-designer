<template>
  <section>
    <el-upload
      class="upload-demo"
      drag
      action="https://jsonplaceholder.typicode.com/posts/"
      :on-preview="handlePreview"
      :on-remove="handleRemove"
      :file-list="fileList"
      multiple
    >
      <i class="el-icon-upload"></i>
      <div class="el-upload__text">
        Arraste e solte uma imagem ou<br /><em>Clique aqui para upload</em>
      </div>
      <div class="el-upload__tip" slot="tip">
        Escrever uma orientação com relação tamanho da imagem
      </div>
    </el-upload>
  </section>
</template>

<script>
export default {
  name: "Uploader",
}
</script>
<style lang="scss" src="./uploader.scss"></style>

<docs>

  ```jsx
  <Uploader />
  ```
</docs>
