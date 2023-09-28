<template>
  <svg 
    aria-hidden="true" 
    :class="svgClass" 
    :style="{
      width: `${size}px`,
      height: `${size}px`,
      fill: color ? color : 'currentColor'
    }"
  >
    <use :xlink:href="iconName" />
  </svg>
</template>

<script setup>
import 'virtual:svg-icons-register';

const props = defineProps({
  name: {
    type: String,
    required: true
  },
  color: {
    type: [String, Function],
    default: ''
  },
  size: {
    type: [Number, String],
    default: 14
  }
})

const iconName = computed(() => `#${props.name}`);

const svgClass = computed(() => {
  if (props.name) {
    return `svg-icon ${props.name}`;
  }
  return "svg-icon";
})
</script>

<style scoped>
.svg-icon {
  fill: currentColor;
  vertical-align: middle;
  outline: none;
}
</style>