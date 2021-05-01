<template>
  <el-pagination
    @size-change="handleSizeChange"
    @current-change="handleCurrentChange"
    v-model:currentPage="page"
    :page-size="100"
    layout="total, prev, pager, next"
    :total="1000"
  />
  <el-tag type="success">标签二23bb</el-tag>
  <el-date-picker size="small" v-model="timerPick" type="date" placeholder="" />
  <el-button type="primary" size="small">返回</el-button>
  <el-tag type="success">标签二</el-tag>
  <el-date-picker v-model="timerPick" type="date" placeholder="" />
  <el-progress :percentage="50" status="exception" />
  <test />
</template>

<script>
import { ref } from 'vue'
import test from './test.vue'

export default {
  components: {
    test
  },
  setup () {
    const page = ref(1)
    const value = ref(0)
    const timerPick = ref('')
    const handleSizeChange = () => {}
    const handleCurrentChange = () => {}
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

<style lang="less" scoped>
@import './home.less';
@import './test.less';
.test {
  font-size: 14px;
}
</style>
