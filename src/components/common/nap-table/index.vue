<template>
  <div class="nap-table" ref="NapTable">
    <NapTableToolbar v-model:size="size" v-if="toolbar" />
    <n-data-table v-bind="$attrs" :size="size">
      <template v-for="(value, name) in $slots" #[name]="scopeData">
        <slot :name="name" v-bind="scopeData || {}" />
      </template>
    </n-data-table>   
  </div>
</template>

<script setup>
  import NapTableToolbar from '@/components/common/nap-table-toolbar/index.vue';

  const props = defineProps({
    toolbar: {
      type: Boolean,
      default: false
    }
  });
  const size = ref('medium');
</script>

<style lang="scss" scoped></style>