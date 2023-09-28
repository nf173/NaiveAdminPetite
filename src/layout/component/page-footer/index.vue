<template>
  <n-el class="page-footer">
    <n-space vertical justify="center" align="center">
      <div class="copyright">
        Copyright ©2023 
        <n-button 
          text 
          style="font-size: 12px;" 
          @click="copyrightOpen"
        >
          Naive Admin Petite
        </n-button>
      </div>
      <div class="records">
        <n-button 
          text 
          style="font-size: 12px;" 
          @click="recordsOpen"
        >
          浙ICP备2023018634号-2
        </n-button>
      </div>
    </n-space>
  </n-el>
</template>

<script setup>

</script>

<style lang="scss" scoped>
  .page-footer {
    position: absolute;
    left: 0;
    bottom: 0;
    width: 100%;
    padding: 10px 0;
    background-color: var(--card-color);
    transition: background .3s ease;
    box-shadow: 0 -1px 4px rgba(75, 75, 75, 0.05); 
    font-size: 12px;
  }
</style>