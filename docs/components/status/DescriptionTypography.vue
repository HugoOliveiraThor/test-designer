<template>
  <div style="padding-bottom:25px;font-family:Barlow">
    <el-row>
      <el-col :span="24" style="padding-bottom:10px;padding-top:10px;">
        <span style="font-weight:600">{{ this.tipo }}</span>
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="5">
        <label style="display:block;padding-bottom:10px">Font-weight</label>
        <span>{{ this.font }}</span>
      </el-col>
      <el-col :span="3">
        <label class="pb-10" style="display:block;padding-bottom:10px">Size</label>
        <span>{{ this.size }}</span>
      </el-col>
      <el-col :span="4">
        <label class="pb-10" style="display:block;padding-bottom:10px">Line heigth</label>
        <span>{{ this.line }}</span>
      </el-col>
      <el-col :span="12">
        <span :style="{ color: colorText, fontSize: size, fontWeight: font }"
          >Com grandes poderes, vem grandes responsabilidades.</span
        >
      </el-col>
    </el-row>
  </div>
</template>

<script>
import _tokens from "@/temas/myfarm/tokens/_index.json"
export default {
  name: "description-typograph",
  props: {
    tipo: {
      type: String,
      required: false,
      default: "brand",
    },
    nome: {
      type: String,
      required: false,
    },
    font: {
      type: String,
      required: false,
    },
    size: {
      type: String,
      required: false,
    },
    line: {
      type: String,
      required: false,
    },
    text: {
      type: String,
      required: false,
    },
    colorText: {
      type: String,
      required: false,
    },
    fontSize: {
      type: String,
      required: false,
    },
  },
}
</script>

<style scoped></style>
