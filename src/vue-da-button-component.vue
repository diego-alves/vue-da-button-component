<template>
  <button @click="onClick">{{text}}</button>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  props: {
    text: String
  },
  setup() {
    return {
      onClick: () => {
        alert("hello!!!")
      }
    }
  },
})
</script>
