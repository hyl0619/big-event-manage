<script setup>
import PageContainer from '@/components/PageContainer.vue'
import { getChannelList, delChannel } from '@/api/article'
import { ref } from 'vue'
import channelEdit from './components/channelEdit.vue'
import { Edit, Delete } from '@element-plus/icons-vue'
import { ElMessage, ElMessageBox } from 'element-plus'
defineOptions({
  name: 'ArticleChannel'
})
const channelList = ref([])
const loading = ref(false)
const getList = async () => {
  loading.value = true
  const res = await getChannelList()
  channelList.value = res.data.data
  loading.value = false
}
getList()
const dialog = ref()
console.log(dialog.value)
const onAddChannel = () => {
  dialog.value.open({})
}
const onEditChannel = (row) => {
  dialog.value.open(row)
}
const onSuccess = () => {
  console.log(11)
  getList()
}
const onDelChannel = async (row) => {
  await ElMessageBox.confirm('你确定要删除吗', '温馨提示', {
    type: 'warning',
    confirmButtonText: '确认',
    cancelButtonText: '取消'
  })
  console.log(row.id)
  await delChannel(row.id)
  ElMessage({
    type: 'success',
    message: '删除成功'
  })
  getList()
}
</script>
<template>
  <page-container title="文章分类">
    <template #extra>
      <el-button type="primary" @click="onAddChannel"> 添加分类 </el-button>
    </template>
    <el-table :data="channelList" style="width: 100%" v-loading="loading">
      <el-table-column label="序号" width="100" type="index"> </el-table-column>
      <el-table-column label="分类名称" prop="cate_name"></el-table-column>
      <el-table-column label="分类别名" prop="cate_alias"></el-table-column>
      <el-table-column label="操作" width="100">
        <template #default="{ row }">
          <el-button
            :icon="Edit"
            circle
            plain
            type="primary"
            @click="onEditChannel(row)"
          ></el-button>
          <el-button
            :icon="Delete"
            circle
            plain
            type="danger"
            @click="onDelChannel(row)"
          ></el-button>
        </template>
      </el-table-column>
      <template #empty>
        <el-empty description="没有数据" />
      </template>
    </el-table>
    <channelEdit ref="dialog" @success="onSuccess"></channelEdit>
  </page-container>
</template>
<style></style>
