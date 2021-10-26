<script lang="ts">
import { defineComponent, ref } from 'vue';
export default defineComponent({
  setup() {
    let value = ref<number>(2);
    return {
      value,
    };
  },
});
</script>

<template>
  <div>
    <a-button type="primary">Primary Button</a-button>
    <a-button>Default Button</a-button>
    <a-button type="dashed">Dashed Button</a-button>
    <a-button type="text">Text Button</a-button>
    <a-button type="link">Link Button</a-button>
    <a-rate v-model:value="value" />
  </div>
</template>
