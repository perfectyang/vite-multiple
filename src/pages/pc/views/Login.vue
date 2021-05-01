<template>
  <div class="layout">
    <div class="layout__content">
      {{ state.count }}
      {{ val }}
      {{userInfo.user}}
    </div>
  </div>
  <button @click="add">add</button>
</template>

<script>
import { reactive, computed  } from 'vue'
import {useStore} from 'vuex'

export default {
  components: {},
  setup () {
    const store = useStore()
    const userInfo = computed(() => store.state.userInfo)

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
      store.dispatch('updateUser', {user: 'perfectyang'})
    }
    return {
      state,
      val,
      add,
      userInfo
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
