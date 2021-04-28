<template>
  <div class="pc">
  <!-- <img src="@/assets/image/wrong.png" /> -->
  {{$t('首页')}}
     <router-view />
  </div>
</template>

<script>
import { reactive } from 'vue'
export default {
  name: 'pc',
  components: {
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

<style lang="less" scoped>
// @import "@/assets/public.less";
.pc {
  color: #ff7676;
}
</style>
