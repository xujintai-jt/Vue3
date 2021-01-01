/*
 * @Author: xujintai
 * @Date: 2020-12-31 16:38:52
 * @LastEditors: xujintai
 * @LastEditTime: 2021-01-01 20:48:40
 * @Description: file content
 * @FilePath: \Vue3\vue3-demo\src\router\index.ts
 */
import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'


const routes: Array<RouteRecordRaw> = [

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
