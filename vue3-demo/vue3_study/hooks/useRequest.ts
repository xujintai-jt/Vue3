/*
 * @Author: xujintai
 * @Date: 2021-01-03 21:02:18
 * @LastEditors: xujintai
 * @LastEditTime: 2021-01-03 21:34:01
 * @Description: file content
 * @FilePath: \Vue3\vue3-demo\src\hooks\useRequest.ts
 */
import axios from 'axios'
import { ref } from 'vue'
export default function (url: string) {
  const isLoading = ref(true)
  const errorMessage = ref('')
  const successMessage = ref('')

  axios.get(url).then(value => {
    if (value.status !== 200) {
      return alert('服务器繁忙')
    }
    isLoading.value = false
    successMessage.value = value.data.data
  }).catch(reason => {
    isLoading.value = true
    errorMessage.value = reason
    alert(reason)
  })


  return {
    isLoading,
    errorMessage,
    successMessage
  }
}