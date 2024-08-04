<script setup>
import { ref } from 'vue'
import { addChannel, changeArticle } from '@/api/article'
import { ElMessage } from 'element-plus'
import { defineEmits } from 'vue'
const emit = defineEmits(['success'])
const dialogVisible = ref(false)
const open = async (row) => {
  dialogVisible.value = true
  console.log(row)
  if (row) {
    formModel.value = row
  }
}

defineExpose({
  open
})

const formModel = ref({
  cate_name: '',
  cate_alias: ''
})
const rules = {
  cate_name: [
    { required: true, message: '请输入分类名称', trigger: 'blur' },
    {
      pattern: /^\S{1,10}$/,
      message: '分类名必须是1-10位的非空字符',
      trigger: 'blur'
    }
  ],
  cate_alias: [
    { required: true, message: '请输入分类别名', trigger: 'blur' },
    {
      pattern: /^[a-zA-Z0-9]{1,15}$/,
      message: '分类别名必须是1-15位的字母数字',
      trigger: 'blur'
    }
  ]
}
const onDone = async () => {
  console.log(formModel.value)
  if (!formModel.value.id) {
    await addChannel(formModel.value)
    ElMessage({
      type: 'success',
      message: '添加成功'
    })
  } else {
    await changeArticle(formModel.value)
    ElMessage({
      type: 'success',
      message: '修改成功'
    })
  }
  emit('success')
  dialogVisible.value = false
}
</script>
<template>
  <el-dialog v-model="dialogVisible" title="添加弹层" width="30%">
    <div>
      <el-form
        :model="formModel"
        :rules="rules"
        label-width="100px"
        style="padding-right: 30px"
      >
        <el-form-item label="分类名称" prop="cate_name">
          <el-input
            v-model="formModel.cate_name"
            minlength="1"
            maxlength="10"
          ></el-input>
        </el-form-item>
        <el-form-item label="分类别名" prop="cate_alias">
          <el-input
            v-model="formModel.cate_alias"
            minlength="1"
            maxlength="15"
          ></el-input>
        </el-form-item>
      </el-form>
    </div>
    <template #footer>
      <span class="dialog-footer">
        <el-button @click="dialogVisible = false">取消</el-button>
        <el-button type="primary" @click="onDone"> 确认 </el-button>
      </span>
    </template>
  </el-dialog>
</template>
