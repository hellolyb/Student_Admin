<template>
  <div class="table">
    <el-table :data="arrSlice" stripe style="width: 100%">
      <el-table-column prop="name" label="学校名称" />
      <el-table-column prop="address" label="所在地" />
      <el-table-column prop="Running" label="办学层次" />
      <el-table-column prop="remark" label="备注" />
    </el-table>
    <div>
      <el-pagination
        :page-size="20"
        :pager-count="11"
        layout="prev, pager, next"
        :total="tableData.length"
        @current-change="handleCurrentChange"
      />
    </div>
    <div class="updata">
      <el-button type="primary">导入excel</el-button>
      <input type="file" accept=".xlsx" class="inp" @change="importExcel" />
      <el-button type="primary" @click="exportExcel">导出excel</el-button>
    </div>
  </div>
  <div>
    <el-button type="primary">{{ $t('user.chat') }}</el-button>
    <el-button type="primary">{{ $t('user.excel') }}</el-button>
  </div>
</template>

<script lang="ts" setup>
import { ref, onMounted, computed } from 'vue'
import * as XLSX from 'xlsx'
import loca from '@/utils/loca/locas'
const pageSize = ref(8)
const pageNum = ref(1)
// 表格数据
const tableData = ref<any>([])
onMounted(() => {
  tableData.value = tableData.value ? loca.getItem('tablest') : ''
})
const arrSlice = computed(() => {
  return tableData.value.slice((pageNum.value - 1) * pageSize.value, pageNum.value * pageSize.value)
})
// 导入 excel文件
const importExcel = (file: any) => {
  const reader = new FileReader()
  reader.onload = (e) => {
    const data = new Uint8Array(e.target.result)
    const workbook = XLSX.read(data, { type: 'array' })
    const worksheet = workbook.Sheets[workbook.SheetNames[0]]
    const jsonData = XLSX.utils.sheet_to_json(worksheet, { header: 1 })
    const headers: any = jsonData[0] // 获取表头数据
    const tableDatas: any = []
    for (let i = 1; i < jsonData.length; i++) {
      const rowData: any = jsonData[i] // 获取每行数据
      const obj: any = {}
      for (let j = 0; j < headers.length; j++) {
        obj[headers[j]] = rowData[j] // 将每行数据与表头对应
      }
      tableDatas.push(obj)
    }
    tableData.value = tableDatas.map((value: any) => {
      return {
        name: value['学校名称'],
        address: value['所在地'],
        Running: value['办学层次'],
        remark: value['备注']
      }
    }) // 更新表格数据
    loca.setItem('tablest', tableData.value)
  }
  reader.readAsArrayBuffer(file.target.files[0])
  //   console.log(file.target.files[0])
}
// 导出excel文件
const exportExcel = () => {
  // 对信息进行处理
  const userInfo = tableData.value.map((item: any) => {
    return {
      ['学校名称']: item.name,
      ['所在地']: item.address,
      ['办学层次']: item.Running,
      ['备注']: item.remark
    }
  })
  const worksheet = XLSX.utils.json_to_sheet(userInfo)
  const workbook = XLSX.utils.book_new()
  XLSX.utils.book_append_sheet(workbook, worksheet, 'Sheet1')
  const data = XLSX.write(workbook, { bookType: 'xlsx', type: 'array' })
  const blob = new Blob([data], {
    type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'
  })
  const url = URL.createObjectURL(blob)
  const link = document.createElement('a')
  link.href = url
  link.download = 'export.xlsx'
  link.click()
  URL.revokeObjectURL(url)
}
// 分页
const handleCurrentChange = (val: number) => {
  pageNum.value = val
}
</script>
<style scoped lang="scss">
.updata {
  position: relative;
  width: 500px;
}
.inp {
  width: 70px;
  height: 10px;
  border: 1px solid #ccc;
  line-height: 30px;
  padding: 10px;
  // opacity: 0;
  z-index: 999;
  position: absolute;
  left: 160px;
  top: 65px;
}
.el-button {
  margin-left: 20px;
}
</style>
