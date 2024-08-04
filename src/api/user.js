import request from '@/utils/request'
export const getUserInfo = () => {
  return request.get('/my/userinfo')
}
export const updateUserInfo = ({ id, nickname, email }) => {
  return request.put('/my/userinfo', { id, nickname, email })
}
export const updateAvatar = (avatar) => {
  return request.patch('/my/update/avatar', { avatar })
}
export const updatePassword = ({ old_pwd, new_pwd, re_pwd }) => {
  return request.patch('/my/updatepwd', { old_pwd, new_pwd, re_pwd })
}
