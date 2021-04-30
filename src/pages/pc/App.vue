<template>
  <div class="pc">
    <!-- <img src="@/assets/image/wrong.png" /> -->
    {{ $t('首页') }}
    <router-view />
  </div>
</template>

<script>
import { reactive } from 'vue'

export default {
  components: {
  },
  setup () {
    const state = reactive({
      count: 1
    })
    return {
      state
    }
  }
}
</script>
