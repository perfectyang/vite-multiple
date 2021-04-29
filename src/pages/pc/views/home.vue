<template>
   <el-pagination
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      v-model:currentPage="page"
      :page-size="100"
      layout="total, prev, pager, next"
      :total="1000">
    </el-pagination>
    <!-- <el-tag type="success">标签二</el-tag>
    <el-date-picker
      v-model="timerPick"
      type="date"
      placeholder="">
    </el-date-picker> -->
</template>

<script>
import {ref} from 'vue'
// ElTag, ElDatePicker
import {ElPagination, } from 'element-plus'
export default {
  components: {
    ElPagination,
    // ElTag,
    // ElDatePicker
  },
  setup () {
    const page = ref(1)
    const value = ref(0)
    const timerPick = ref('')
    const handleSizeChange = () => {

    }
    const handleCurrentChange = () => {

    }
    return {
      value,
      page,
      handleSizeChange,
      handleCurrentChange,
      timerPick
    }
  }
}
</script>

<style lang='less' scoped>

</style>
