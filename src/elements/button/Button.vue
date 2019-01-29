<template>
  <component :is="type" :href="href" :type="submit" :class="['button', size, state, variation]">
    <slot />
  </component>
</template>

<script src="./button.js" />

<style lang="scss" scoped src="./button.scss"></style>

<docs>
  ```jsx
  <div>
  <div>
    <label>Botão primário</label>
    <Button variation="primary" >Normal</Button>
    <Button variation="primary" state="hover" >Hover</Button>    
    <Button variation="primary" state="active" >Ativo</Button>
    <Button variation="primary unavailable" >Indisponível</Button>
  </div>
  <div>
    <label>Botão secundário</label>
    <Button variation="secondary">Normal</Button>
    <Button variation="secondary" state="hover">Hover</Button>
    <Button variation="secondary" state="active" >Ativo</Button>
    <Button variation="secondary unavailable" >Indisponível</Button>
    </div>  
  </div>
  ```
</docs>
