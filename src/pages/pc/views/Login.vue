<template>
  <div class="layout">
    <div class="layout__content">
      {{ state.count }}
      {{ val }}
    </div>
  </div>
  <button @click="add">add</button>
</template>

<script>
import { reactive, computed } from 'vue'

export default {
  components: {},
  setup () {
    const state = reactive({
      count: 1
    })
    const idx = 1
    const val = computed(() => {
      state.count += idx
      return state.count
    })
    const add = () => {
      state.count += 1
    }
    return {
      state,
      val,
      add
    }
  }
}
</script>

<style lang="less" scoped>
.layout {
  color: pink;
  display: flex;
  &__content {
    font-size: 16px;
    flex: 1;
  }
}
</style>
