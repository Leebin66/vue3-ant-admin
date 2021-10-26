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
    <!-- <a-spin /> -->
    <a-rate v-model:value="value" />

  </div>
</template>

<style scoped lang="scss">
  .variable-span {
    color: $color-primary;
  }
  .mixin-p {
    @include no-wrap();
    color: $color-primary
  }
</style>
