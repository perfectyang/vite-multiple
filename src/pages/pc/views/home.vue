<template>
   <!-- <el-pagination
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      v-model:currentPage="page"
      :page-size="100"
      layout="total, prev, pager, next"
      :total="1000">
    </el-pagination> -->
    <el-tag type="success">标签二</el-tag>
</template>

<script>
import {ref} from 'vue'
import {ElTag} from 'element-plus'
export default {
  components: {
    // ElPagination,
    ElTag
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
