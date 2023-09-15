import { ElNotification } from 'element-plus'
const err = (type: string, title: string) => {
  ElNotification({
    title: type,
    message: title,
    type: type
  })
}
export default err
