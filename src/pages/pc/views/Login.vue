<template>
  <div class="layout">
    <div class="layout__content">
      {{state.count}}aaaa
      {{val}}
    </div>
  </div>
  <button @click="add">add</button>
</template>

<script>
import { reactive, computed} from 'vue'
export default {
  components: {
  },
  setup() {
    const state = reactive({
      count: 1
    })
    const val = computed(() => {
      return state.count += 10
    })
    const add = () => {
      console.log(state.count++)
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
