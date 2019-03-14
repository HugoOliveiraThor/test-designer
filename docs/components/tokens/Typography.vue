<template>
  <div>
    <!--BLOCK -->
    <section v-for="(i, idx) in dados" :key="`itens${idx}`">
      <span style="font-size:25px">{{ i.nome }}</span>
      <section v-for="(j, idx) in i.list" :key="`jade${idx}`">
        <BlockDescription
          :nome="j.nome"
          :tipo="j.tipo"
          :font="j.font"
          :size="j.size"
          :line="j.line"
          :colorText="j.colorText"
        />
      </section>
      <hr />
    </section>
  </div>
</template>

<script>
import Vue from "vue"
import _tokens from "@/temas/myfarm/tokens/_index.json"

const BlockDescription = Vue.component("block-description", {
  props: ["tipo", "nome", "font", "size", "line", "text", "colorText", "fontSize"],
  template: `<div style="padding-bottom:25px;font-family:Barlow">
    <el-row>
      <el-col :span="24" style="padding-bottom:10px;padding-top:10px;">
        <span style="font-weight:600">{{this.tipo}}</span>
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="5">
        <label style="display:block;padding-bottom:10px">Font-weight</label>
        <span>{{this.font}}</span>
      </el-col>
      <el-col :span="3">
        <label class="pb-10" style="display:block;padding-bottom:10px">Size</label>
        <span>{{this.size}}</span>
      </el-col>
      <el-col :span="4">
        <label class="pb-10" style="display:block;padding-bottom:10px">Line heigth</label>
        <span>{{this.line}}</span>
      </el-col>
      <el-col :span="12">
        <span :style="{color:colorText,fontSize:size, fontWeight:font }">Com grandes poderes, vem grandes responsabilidades.</span>
      </el-col>
    </el-row>
    </div>
  `,
})

export default {
  name: "Typography",
  data: function() {
    return {
      dados: [
        {
          nome: "Numbers - Big",
          size: "34px",
          list: [
            {
              tipo: "0%",
              font: _tokens.weight_regular,
              size: "60px",
              line: "0",
              colorText: _tokens.color_grey_0,
            },
            {
              tipo: "60%",
              font: _tokens.weight_regular,
              size: "60px",
              line: "0",
              colorText: _tokens.color_grey_60,
            },
            {
              tipo: "dark",
              font: _tokens.weight_regular,
              size: "60px",
              line: "0",
              colorText: _tokens.color_grey_dark,
            },
            {
              tipo: "primary",
              font: _tokens.weight_regular,
              size: "60px",
              line: "0",
              colorText: _tokens.color_primary,
            },
            {
              tipo: "secondary",
              font: _tokens.weight_regular,
              size: "60px",
              line: "0",
              colorText: _tokens.color_secondary,
            },
          ],
        },
        {
          nome: "Numbers - Medium",
          size: "34px",
          list: [
            {
              tipo: "0%",
              font: _tokens.weight_regular,
              size: "40px",
              line: "0",
              colorText: _tokens.color_grey_0,
            },
            {
              tipo: "60%",
              font: _tokens.weight_regular,
              size: "40px",
              line: "0",
              colorText: _tokens.color_grey_60,
            },
            {
              tipo: "dark",
              font: _tokens.weight_regular,
              size: "40px",
              line: "0",
              colorText: _tokens.color_grey_dark,
            },
            {
              tipo: "primary",
              font: _tokens.weight_regular,
              size: "40px",
              line: "0",
              colorText: _tokens.color_primary,
            },
            {
              tipo: "secondary",
              font: _tokens.weight_regular,
              size: "40px",
              line: "0",
              colorText: _tokens.color_secondary,
            },
          ],
        },
        {
          nome: "Numbers - Small",
          size: "34px",
          list: [
            {
              tipo: "0%",
              font: _tokens.weight_regular,
              size: "30px",
              line: "0",
              colorText: _tokens.color_grey_0,
            },
            {
              tipo: "60%",
              font: _tokens.weight_regular,
              size: "30px",
              line: "0",
              colorText: _tokens.color_grey_60,
            },
            {
              tipo: "dark",
              font: _tokens.weight_regular,
              size: "30px",
              line: "0",
              colorText: _tokens.color_grey_dark,
            },
            {
              tipo: "primary",
              font: _tokens.weight_regular,
              size: "30px",
              line: "0",
              colorText: _tokens.color_primary,
            },
            {
              tipo: "secondary",
              font: _tokens.weight_regular,
              size: "30px",
              line: "0",
              colorText: _tokens.color_secondary,
            },
          ],
        },
        {
          nome: "H1",
          size: "34px",
          list: [
            {
              tipo: "brand",
              font: _tokens.weight_light,
              size: "34px",
              line: "0",
              colorText: _tokens.color_primary,
            },
            {
              tipo: "dark",
              font: _tokens.weight_light,
              size: "34px",
              line: "0",
              colorText: _tokens.color_grey_80,
            },
          ],
        },
        {
          nome: "H2",
          size: "34px",
          list: [
            {
              tipo: "H2",
              font: _tokens.weight_regular,
              size: "34px",
              line: "0",
              colorText: _tokens.color_secondary,
            },
          ],
        },
        {
          nome: "H3",
          size: "19px",
          list: [
            {
              tipo: "0%",
              font: _tokens.weight_semi_bold,
              size: "19px",
              line: "0",
              colorText: _tokens.color_grey_0,
            },
            {
              tipo: "60%",
              font: _tokens.weight_semi_bold,
              size: "19px",
              line: "0",
              colorText: _tokens.color_grey_60,
            },
            {
              tipo: "dark",
              font: _tokens.weight_semi_bold,
              size: "19px",
              line: "0",
              colorText: _tokens.color_grey_40,
            },
            {
              tipo: "primary",
              font: _tokens.weight_semi_bold,
              size: "19px",
              line: "0",
              colorText: _tokens.color_primary,
            },
            {
              tipo: "secondary",
              font: _tokens.weight_semi_bold,
              size: "19px",
              line: "0",
              colorText: _tokens.color_secondary,
            },
          ],
        },
        {
          nome: "Body",
          size: "14px",
          list: [
            {
              tipo: "0%",
              font: _tokens.weight_regular,
              size: "14px",
              line: _tokens.line_height_xl,
              colorText: _tokens.color_grey_0,
            },
            {
              tipo: "60%",
              font: _tokens.weight_regular,
              size: "14px",
              line: _tokens.line_height_xl,
              colorText: _tokens.color_grey_60,
            },
            {
              tipo: "dark",
              font: _tokens.weight_regular,
              size: "14px",
              line: _tokens.line_height_xl,
              colorText: _tokens.color_grey_dark,
            },
            {
              tipo: "primary",
              font: _tokens.weight_regular,
              size: "14px",
              line: _tokens.line_height_xl,
              colorText: _tokens.color_primary,
            },
            {
              tipo: "secondary",
              font: _tokens.weight_regular,
              size: "14px",
              line: _tokens.line_height_xl,
              colorText: _tokens.color_secondary,
            },
          ],
        },
        {
          nome: "Minitext",
          size: "12px",
          list: [
            {
              tipo: "0%",
              font: _tokens.weight_regular,
              size: "12px",
              line: "16px",
              colorText: _tokens.color_grey_0,
            },
            {
              tipo: "60%",
              font: _tokens.weight_regular,
              size: "12px",
              line: "16px",
              colorText: _tokens.color_grey_60,
            },
            {
              tipo: "alert",
              font: _tokens.weight_regular,
              size: "12px",
              line: "16px",
              colorText: _tokens.color_status_alert,
            },
            {
              tipo: "dark",
              font: _tokens.weight_regular,
              size: "12px",
              line: "16px",
              colorText: _tokens.color_grey_dark,
            },
            {
              tipo: "error",
              font: _tokens.weight_regular,
              size: "12px",
              line: "16px",
              colorText: _tokens.color_status_error,
            },
            {
              tipo: "info",
              font: _tokens.weight_regular,
              size: "12px",
              line: "16px",
              colorText: _tokens.color_status_info,
            },
            {
              tipo: "primary",
              font: _tokens.weight_regular,
              size: "12px",
              line: "16px",
              colorText: _tokens.color_status_primary,
            },
            {
              tipo: "secondary",
              font: _tokens.weight_regular,
              size: "12px",
              line: "16px",
              colorText: _tokens.color_secondary,
            },
            {
              tipo: "success",
              font: _tokens.weight_regular,
              size: "12px",
              line: "16px",
              colorText: _tokens.color_status_success,
            },
          ],
        },
        {
          nome: "Overline",
          size: "11px",
          list: [
            {
              tipo: "0%",
              font: _tokens.weight_regular,
              size: "11px",
              line: "16px",
              colorText: _tokens.color_grey_0,
            },
            {
              tipo: "60%",
              font: _tokens.weight_regular,
              size: "11px",
              line: "16px",
              colorText: _tokens.color_grey_60,
            },
            {
              tipo: "alert",
              font: _tokens.weight_regular,
              size: "11px",
              line: "16px",
              colorText: _tokens.color_status_alert,
            },
            {
              tipo: "dark",
              font: _tokens.weight_regular,
              size: "11px",
              line: "16px",
              colorText: _tokens.color_grey_dark,
            },
            {
              tipo: "error",
              font: _tokens.weight_regular,
              size: "11px",
              line: "16px",
              colorText: _tokens.color_status_error,
            },
            {
              tipo: "info",
              font: _tokens.weight_regular,
              size: "11px",
              line: "16px",
              colorText: _tokens.color_status_info,
            },
            {
              tipo: "primary",
              font: _tokens.weight_regular,
              size: "11px",
              line: "16px",
              colorText: _tokens.color_primary,
            },
            {
              tipo: "secondary",
              font: _tokens.weight_regular,
              size: "11px",
              line: "16px",
              colorText: _tokens.color_secondary,
            },
            {
              tipo: "success",
              font: _tokens.weight_regular,
              size: "11px",
              line: "16px",
              colorText: _tokens.color_status_success,
            },
          ],
        },
        {
          nome: "Link - Default",
          size: "14px",
          list: [
            {
              tipo: "0%",
              font: _tokens.weight_regular,
              size: "14px",
              line: "0px",
              colorText: _tokens.color_grey_0,
            },
            {
              tipo: "60%",
              font: _tokens.weight_regular,
              size: "14px",
              line: "0px",
              colorText: _tokens.color_grey_60,
            },
            {
              tipo: "dark",
              font: _tokens.weight_regular,
              size: "14px",
              line: "0px",
              colorText: _tokens.color_grey_dark,
            },
            {
              tipo: "primary",
              font: _tokens.weight_regular,
              size: "14px",
              line: "0px",
              colorText: _tokens.color_primary,
            },
            {
              tipo: "secondary",
              font: _tokens.weight_regular,
              size: "14px",
              line: "0px",
              colorText: _tokens.color_secondary,
            },
          ],
        },
        {
          nome: "Link - Small",
          size: "12px",
          list: [
            {
              tipo: "0%",
              font: _tokens.weight_regular,
              size: "12px",
              line: "0px",
              colorText: _tokens.color_grey_0,
            },
            {
              tipo: "60%",
              font: _tokens.weight_regular,
              size: "12px",
              line: "0px",
              colorText: _tokens.color_grey_60,
            },
            {
              tipo: "dark",
              font: _tokens.weight_regular,
              size: "12px",
              line: "0px",
              colorText: _tokens.color_dark,
            },
            {
              tipo: "primary",
              font: _tokens.weight_regular,
              size: "12px",
              line: "0px",
              colorText: _tokens.color_primary,
            },
            {
              tipo: "secondary",
              font: _tokens.weight_regular,
              size: "12px",
              line: "0px",
              colorText: _tokens.color_secondary,
            },
          ],
        },
        {
          nome: "System - Buttons default",
          size: "14px",
          list: [
            {
              tipo: "0%",
              font: _tokens.weight_regular,
              size: "14px",
              line: "0px",
              colorText: _tokens.color_grey_0,
            },
            {
              tipo: "40%",
              font: _tokens.weight_regular,
              size: "14px",
              line: "0px",
              colorText: _tokens.color_grey_40,
            },
            {
              tipo: "80%",
              font: _tokens.weight_regular,
              size: "14px",
              line: "0px",
              colorText: _tokens.color_grey_80,
            },
            {
              tipo: "primary",
              font: _tokens.weight_regular,
              size: "14px",
              line: "0px",
              colorText: _tokens.color_primary,
            },
            {
              tipo: "secondary",
              font: _tokens.weight_regular,
              size: "14px",
              line: "0px",
              colorText: _tokens.color_secondary,
            },
          ],
        },
        {
          nome: "System - mini button",
          size: "12px",
          list: [
            {
              tipo: "0%",
              font: _tokens.weight_bold,
              size: "12px",
              line: "14px",
              colorText: _tokens.color_grey_0,
            },
            {
              tipo: "40%",
              font: _tokens.weight_bold,
              size: "12px",
              line: "14px",
              colorText: _tokens.color_grey_40,
            },
            {
              tipo: "80%",
              font: _tokens.weight_bold,
              size: "12px",
              line: "14px",
              colorText: _tokens.color_grey_80,
            },
            {
              tipo: "primary",
              font: _tokens.weight_bold,
              size: "12px",
              line: "14px",
              colorText: _tokens.color_primary,
            },
            {
              tipo: "secondary",
              font: _tokens.weight_bold,
              size: "12px",
              line: "14px",
              colorText: _tokens.color_secondary,
            },
          ],
        },
        {
          nome: "System - Inputs - labels",
          size: "13px",
          list: [
            {
              tipo: "0%",
              font: _tokens.weight_regular,
              size: "13px",
              line: "0",
              colorText: _tokens.color_grey_0,
            },
            {
              tipo: "60%",
              font: _tokens.weight_regular,
              size: "13px",
              line: "0",
              colorText: _tokens.color_grey_60,
            },
            {
              tipo: "80%",
              font: _tokens.weight_regular,
              size: "13px",
              line: "0",
              colorText: _tokens.color_grey_80,
            },
            {
              tipo: "alert",
              font: _tokens.weight_regular,
              size: "13px",
              line: "0",
              colorText: _tokens.color_support_alerta,
            },
            {
              tipo: "brand",
              font: _tokens.weight_regular,
              size: "13px",
              line: "0",
              colorText: _tokens.color_primary,
            },
            {
              tipo: "error",
              font: _tokens.weight_regular,
              size: "13px",
              line: "0",
              colorText: _tokens.color_support_erro,
            },
            {
              tipo: "success",
              font: _tokens.weight_regular,
              size: "13px",
              line: "0",
              colorText: _tokens.color_support_sucesso,
            },
          ],
        },
        {
          nome: "System - Inputs - placeholder",
          size: "14px",
          list: [
            {
              tipo: "60%",
              font: _tokens.weight_regular,
              size: "14px",
              line: "0",
              colorText: _tokens.color_grey_60,
            },
            {
              tipo: "dark",
              font: _tokens.weight_regular,
              size: "14px",
              line: "17px",
              colorText: _tokens.color_grey_dark,
            },
          ],
        },
      ],
    }
  },
  components: {
    BlockDescription,
  },
}
</script>

<style scoped></style>

<docs>
  ```jsx
  <typography/>
  ```
</docs>
