<template>
  <div class="m">
    <test />
    <router-view />
  </div>
</template>

<script>
import { reactive } from 'vue'
// import { useRouter } from 'vue-router'
import test from '@/component/test.vue'
export default {
  name: 'App',
  components: {
    test
  },
  setup() {
    const state = reactive({
      count: 1
    })
    return {
      state
    }
  }
}
</script>

<style scoped>
.m {
  color: #ff6161;
}
</style>
