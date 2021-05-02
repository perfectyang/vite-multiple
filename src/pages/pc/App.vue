<template>
  <div class="pc">
    {{ $t('首页') }}
    <router-view />
  </div>
</template>

<script>
import { reactive } from 'vue'

export default {
  components: {},
  setup () {
    const state = reactive({
      count: 1,
      name: 'a'
    })
    return {
      state
    }
  }
}
</script>
