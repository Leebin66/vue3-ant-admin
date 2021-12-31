<script lang="ts">
  import pagexy from 'hooks/pagexy'
  import { defineComponent } from 'vue'
  export default defineComponent({
    setup() {
      let {x, y} = pagexy()
      return {
        x,
        y
      }
    }
  })
</script>

<template>
  <div>
    <span>login</span>
    <p>x：{{x}}</p>
    <p>y：{{y}}</p>
  </div>
  
</template>

<style lang="scss" scoped>
</style>