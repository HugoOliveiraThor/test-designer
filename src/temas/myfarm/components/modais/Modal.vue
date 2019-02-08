```vue
<template>
  <div>
    <button @click.prevent="showModal = true">Open Modal</button>
    <Modal :showModal="showModal">
      <h1 slot="head">Title</h1>
      <div slot="body">Countdown to close mode {{ countdown }}</div>
    </Modal>
  </div>
</template>

<script>
// You can also use 'exports.default = {}' style module exports.
export default {
  name: "Modal",
  data() {
    return {
      showModal: false,
      countdown: timeCountdown,
    }
  },
}
</script>
```

<docs>
 ```jsx
 <Modal/>
```
</docs>
