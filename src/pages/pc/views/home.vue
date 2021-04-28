<template>
   <el-pagination
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      v-model:currentPage="page"
      :page-size="100"
      layout="total, prev, pager, next"
      :total="1000">
    </el-pagination>
</template>

<script>
import {ref} from 'vue'
import {ElPagination} from 'element-plus'
export default {
  components: {
    ElPagination
  },
  setup () {
    const page = ref(1)
    const value = ref(0)
    const handleSizeChange = () => {

    }
    const handleCurrentChange = () => {

    }
    return {
      value,
      page,
      handleSizeChange,
      handleCurrentChange
    }
  }
}
</script>

<style lang='less' scoped>

</style>
