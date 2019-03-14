<template>
  <div class="new-ciclo-wrapper-btn" @click="onClick" :style="{ width: width }">
    <button
      type="button"
      :style="{
        width: widthHeightButton,
        height: widthHeightButton,
        backgroundColor: backgColorBtn,
      }"
    >
      <i :class="icon" :style="{ color: colorIcon, fontSize: fontSizeButton }"> </i>
    </button>
    <span>{{ label }}</span>
  </div>
</template>

<script>
/*
 * O width do botão é necessário se ajustar quando for se usar LABEL
 * voce não irá conseguir visualizar o texto
 *
 */
import tokens from "../../tokens/_index.json"
export default {
  name: "cnx-button-icon",
  status: "ready",
  release: "0.0.1",
  props: {
    /**
     * Um label que pode ser apresentando junto ao botão com icone
     *
     */
    label: {
      type: String,
      required: false,
      default: "Adicionar",
    },
    /**
     * A função que dispara a ação de clicar no botão
     */
    onClick: {
      type: Function,
      required: false,
      default: () => {},
    },
    /**
     * O icone para ser usado no botão
     * Acessar a lista de icones do siagri
     * Por padrão está usando um icone do el-icon-plus
     */
    icon: {
      type: String,
      required: false,
      default: "el-icon-plus",
    },
    /**
     * A cor do icone.
     */
    colorIcon: {
      type: String,
      default: tokens.color_secondary,
      required: false,
    },
    /**
     * O tamanho do botão.
     *
     */
    width: {
      type: String,
      required: false,
      default: "32px",
    },
    /**
     * A altura e largura do botão.
     */
    widthHeightButton: {
      type: String,
      required: false,
      default: "30px",
    },
    /**
     * O tamanho do icone dentro do botão
     */
    fontSizeButton: {
      type: String,
      required: false,
      default: "17px",
    },
    /**
     * Cor de fundo do botão
     */
    backgColorBtn: {
      type: String,
      required: false,
    },
  },
}
</script>

<style lang="scss" src="./styles.scss" scoped></style>

<docs>
  ```jsx
  <cnx-button-icon />
  ```
</docs>
