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
  <router-view></router-view>
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
