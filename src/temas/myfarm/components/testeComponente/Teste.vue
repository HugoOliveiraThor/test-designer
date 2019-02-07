```vue
<template>
  <div class="wrapper">
    <Button id="dog-name-button" @click.native="pushButton">Push Me</Button>
    <hr />
    <input v-model="recover" />
    <p class="text-name">Next Dog Name: {{ dogName }}</p>
  </div>
</template>

<script>
// You can also use 'exports.default = {}' style module exports.
const dogNames = ["Conan", "Lucky", "Micon"]
export default {
  name: "TesteComponente",
  data() {
    return { numClicks: 0, dogName: dogNames[0], recover: "Ola" }
  },
  methods: {
    pushButton() {
      this.numClicks += 1
      this.dogName = dogNames[this.numClicks]
    },
  },
}
</script>

<style scoped></style> ```

<docs>
 ```jsx
 <div>
 <TesteComponente/>
 </div>
 
```
</docs>
