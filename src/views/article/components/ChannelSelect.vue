<script setup>
import { getChannelList } from '@/api/article'
import { ref } from 'vue'

const emit = defineEmits(['update:modelValue'])
const channelList = ref([])
const getList = async () => {
  const res = await getChannelList()
  channelList.value = res.data.data
}
getList()
defineProps({
  modelValue: {
    type: [Number, String]
  },
  width: {
    type: String
  }
})
</script>
<template>
  <el-select
    :modelValue="modelValue"
    @update:modelValue="emit('update:modelValue', $event)"
    :style="width"
  >
    <el-option
      v-for="item in channelList"
      :key="item.id"
      :label="item.cate_name"
      :value="item.id"
    ></el-option>
  </el-select>
</template>
