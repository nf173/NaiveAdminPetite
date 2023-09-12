<!--
 * @Author: nanfs
 * @Date: 2023-09-04 15:05:31
 * @LastEditTime: 2023-09-06 14:50:53
 * @LastEditors: nanfs
 * @Description: 
-->
<template>
  <n-loading-bar-provider>
    <n-dialog-provider>
      <n-notification-provider>
        <n-message-provider>
          <slot name="default"></slot>
        </n-message-provider>
      </n-notification-provider>
    </n-dialog-provider>
  </n-loading-bar-provider>
</template>