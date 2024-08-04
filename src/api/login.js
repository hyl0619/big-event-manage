import request from '@/utils/request'
export const userRegister = ({ username, password, repassword }) => {
  return request.post('/api/reg', { username, password, repassword })
}
export const loginUser = ({ username, password }) => {
  return request.post('/api/login', { username, password })
}
