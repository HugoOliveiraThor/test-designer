<template>
  <component :is="wrapper" :class="['input', { 'input-expand': width === 'expand' }]">
    <label :for="id" v-if="label"> {{ label }} </label>
    <input
      :disabled="disabled"
      :type="type"
      :value="value"
      :class="state"
      :placeholder="placeholder"
      @input="onInput($event.target.value)"
      @focus="onFocus($event.target.value)"
    />
  </component>
</template>

<script src="./input.js" />

<style lang="scss" scoped src="./input.scss"></style>

<docs>
  ```jsx
  <div>
    <Input 
        label="Input normal" 
        placeholder="Write your text"/>
    <Input 
        label="Input preenchido"
        placeholder="João da Silva"/>
    <Input 
        label="Input hover" 
        state="hover"/>
    <Input 
        label="Input disabled" 
        disabled
        placeholder="João da Silva"/>
    <Input 
        label="Input focus primario"
        state="focus"/>    
    <Input 
        label="Input success"
        state="success"/>
    <Input 
        label="Input erro"
        state="error"/>
    <Input 
        label="Input alerta"
        state="alert"/>  
  </div>
  ``` 
</docs>
