<!--
 * @Author: nanfs
 * @Date: 2023-09-10 23:47:21
 * @LastEditTime: 2023-09-11 15:09:15
 * @LastEditors: nanfs
 * @Description: 
-->
<template>
  <div>
    服务器列表
  </div>
</template>

<script setup>
import { getHomeServerList } from '../../api/modules/dst';

onMounted(async () => {
  await getHomeServerList().then(res => {
    console.log(res);
  });
})
</script>

<style lang="scss" scoped>

</style>