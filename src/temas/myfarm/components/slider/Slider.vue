<template>
  <section>
    <div class="block">
      <span class="demonstration">Default value</span>
      <el-slider v-model="value1"></el-slider>
    </div>
    <div class="block">
      <span class="demonstration">Customized initial value</span>
      <el-slider v-model="value2"></el-slider>
    </div>
    <div class="block">
      <span class="demonstration">Hide Tooltip</span>
      <el-slider v-model="value3" :show-tooltip="false"></el-slider>
    </div>
    <div class="block">
      <span class="demonstration">Format Tooltip</span>
      <el-slider v-model="value4" :format-tooltip="formatTooltip"></el-slider>
    </div>
    <div class="block">
      <span class="demonstration">Disabled</span>
      <el-slider v-model="value5" disabled></el-slider>
    </div>
  </section>
</template>

<script src="./slider.js" />
<!-- <style src="../../styles/index.css"></style> <style lang="scss" src="./slider.scss"></style> -->

<docs>
  ```jsx
  <Slider />
  ```
</docs>
