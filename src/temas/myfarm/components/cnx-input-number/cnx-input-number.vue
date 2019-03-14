<template>
  <div class="siagri-input-number" :class="size">
    <input
      ref="input"
      :size="size"
      :value="valor"
      v-money="{ precision, suffix, prefix, thousands }"
      @change="change"
      @blur="$emit('blur')"
      @keydown="$emit('keydown')"
      @keyup="$emit('keyup')"
      :min="min"
      :max="max"
      :readonly="$props.readonly"
    />
    <div class="suffix" v-if="$slots.suffix"><slot name="suffix" /></div>
  </div>
</template>

<script src="./scripts.js" />
<style lang="scss" src="./styles.scss"></style>

<docs>
  ```jsx
  <cnx-input-number size="small" />
  ```
</docs>
