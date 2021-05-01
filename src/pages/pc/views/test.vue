<template>
  <div class="box">testst22</div>
  <el-tag type="success">里面11111</el-tag>
  <el-table :data="tableData" style="width: 100%">
    <el-table-column prop="date" label="日期4" width="180">
      <template #default="scope">
        {{ scope.row }}
      </template>
    </el-table-column>
  </el-table>
</template>

<script>
import { defineComponent, reactive } from 'vue'

export default defineComponent({
  setup () {
    const tableData = reactive([
      {
        date: '2016-05-02',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
      },
      {
        date: '2016-05-04',
        name: '王小虎111',
        address: '上海市普陀区金沙江路 1517 弄'
      },
      {
        date: '2016-05-01',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1519 弄'
      },
      {
        date: '2016-05-03',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1516 弄'
      }
    ])
    return {
      tableData
    }
  }
})
</script>

<style lang="less" scoped>
@import './test.less';
</style>
