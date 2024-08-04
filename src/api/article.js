import request from '@/utils/request'
export const getChannelList = () => {
  return request.get('/my/cate/list')
}
export const addChannel = ({ cate_name, cate_alias }) => {
  return request.post('/my/cate/add', { cate_name, cate_alias })
}
export const changeArticle = (data) => {
  return request.put('/my/cate/info', data)
}
export const delChannel = (id) => {
  return request.delete('/my/cate/del', { params: { id } })
}
export const getArticleList = (params) => {
  return request.get('/my/article/list', { params })
}
export const addArticle = (fd) => {
  return request.post('/my/article/add', fd)
}
export const getArticleDetail = (id) => {
  return request.get('/my/article/info', {
    params: { id }
  })
}
export const delArticle = (id) => {
  return request.delete('/my/article/info', {
    params: {
      id
    }
  })
}
export const updateArticle = (fd) => {
  return request.put('/my/article/info', fd)
}
