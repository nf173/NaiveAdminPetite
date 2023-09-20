<template>
  <div class="basic-table">
    <n-data-table v-bind="$attrs">
      <template v-for="(value, name) in $slots" #[name]="scopeData">
        <slot :name="name" v-bind="scopeData || {}" />
      </template>
    </n-data-table>   
  </div>
</template>

<script setup>
</script>

<style lang="scss" scoped>
.table-toolbar {
  margin-bottom: 15px;
}
</style>