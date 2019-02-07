<template>
  <el-container>
    <el-header style="background-color:blue">Header</el-header>
    <el-container>
      <el-aside style="background-color:yellow" width="200px">Aside</el-aside>
      <el-container>
        <el-main>Main</el-main>
        <el-footer>Footer</el-footer>
      </el-container>
    </el-container>
  </el-container>
</template>

<script>
export default {
  name: "Index",
  mounted() {
    console.log("Rodouuu")
  },
}
</script>

<style scoped></style>
