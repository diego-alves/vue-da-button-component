<script lang="ts">
import { defineComponent } from 'vue';
import VueDaButtonComponent from '@/vue-da-button-component.vue';

export default defineComponent({
  name: 'ServeDev',
  components: {
    VueDaButtonComponent
  }
});
</script>

<template>
  <div id="app">
    <vue-da-button-component text="Click Me!!!" />
  </div>
</template>
