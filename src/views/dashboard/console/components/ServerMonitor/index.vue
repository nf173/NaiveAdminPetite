<template>
  <n-card hoverable class="progress-card" content-style="display: flex;" :bordered="false">
    <n-space>
      <n-progress type="circle" style="width: 100px;" :color="getColor" :offset-degree="180" :percentage="percentage">
        <span style="width: 70px; text-align: center; font-size: 18px;">
          <n-number-animation :precision="2" :from="0" :to="percentage" />%
        </span>
      </n-progress>
    </n-space>
    <n-space vertical style="min-width: 0; margin-left: 15px;">
      <n-statistic :label="statistic.label">
        <n-ellipsis>
          {{ statistic.value }}
        </n-ellipsis>
      </n-statistic>

      <n-space v-if="statistic.extra">
        <n-tag size="small" :bordered="false" :type="statistic.extra.type">
          {{ statistic.extra.name }}
        </n-tag>
        <span style="color: #767c82; line-height: 1.8em;">
          {{ statistic.extra.value }}
        </span>
      </n-space>
    </n-space>
  </n-card>
</template>

<script setup>
  const props = defineProps({
    isSetupColor: {
      type: Boolean,
      defalut: false
    },
    color: {
      type: String,
      defalut: ''
    },
    percentage: {
      type: Number,
      defalut: 0
    },
    statistic: {
      type: Object,
      defalut: () => {
        return {
          label: '',
          value: '',
          extra: {
            type: '',
            name: '',
            value: ''
          }
        }
      }
    }
  });

  // 是否使用步进颜色
  const getColor = computed(() => {
    return props.isSetupColor ? getProgressStatus(props.percentage) : props.color;
  });

  /**
   * @method 判断数值是否在范围内
   * @param {Number} target - 目标值
   * @param {Number} min - 不包含最小值
   * @param {Number} max - 包含最大值
   */
  function inRange(target, min, max) {
    if (typeof (target) === 'string') {
      target = parseFloat(target);
    }
    if (target > min && target <= max) {
      return true;
    } else {
      return false;
    }
  }

  /**
   * @method 进度条步进颜色
   * @param {Number} target 当前进度值
   */
  function getProgressStatus(target) {
    if (inRange(target, 0, 50)) {
      return '#18a058';
    } else if (inRange(target, 50, 75)) {
      return '#f0a020';
    } else if (target === 360 || inRange(target, 75, 100)) {
      return '#d03050';
    }
  }
</script>

<style lang="scss" scoped>
  .card-left {
    width: 100px;
  }

  .card-right {
    display: flex;
    flex-direction: column;
    margin-left: 20px;
    flex-grow: 1;
  }
</style>