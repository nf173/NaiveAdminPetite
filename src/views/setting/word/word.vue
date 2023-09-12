<template>
  <div class="word-setting">
    <n-card :bordered="false">
      <n-tabs type="line" size="large">
        <!-- 地面 -->
        <n-tab-pane 
          class="setting-panel"
          name="master" 
          tab="地面"
        >
          <n-tabs type="line" size="large">
            <n-tab-pane 
              name="master-rules" 
              tab="世界规则"
            >
              <!-- 全局 -->
              <n-list v-for="(rule, index) in rules" :key="rule.title">
                <template #header>
                  <div class="list-header">
                    <SvgIcon :name="rule.icon" size="28" />
                    <n-text strong>{{ rule.title }}</n-text>
                  </div>
                </template>

                <n-list-item>
                  <n-grid 
                    cols="1 605:2 1000:3 1200:4 1600:5" 
                    x-gap="40" 
                    y-gap="30"
                    item-responsive
                  >
                    <n-grid-item 
                      v-for="option in rule.options" 
                      :key="option.key"
                    >
                      <n-space 
                        align="center" 
                        item-style="display: flex;" 
                        :wrap-item="false" 
                      >
                        <n-image 
                          preview-disabled 
                          width="80"
                          :src="option.icon" 
                        />
                        <n-space vertical style="flex-grow: 1;">
                          <span>{{ option.label }}</span>
                          <n-select 
                            v-model:value="rulesModel[index][option.name]"
                            style="max-width: 250px;"
                            :default-value="option.select[0].value"
                            :options="option.select" 
                          />
                        </n-space>
                      </n-space>
                    </n-grid-item>
                  </n-grid>
                </n-list-item>
              </n-list>
              <!-- <n-thing
                class="global-thing" 
                v-for="(rule, index) in rules"
                content-indented 
                :key="rule.title"
              >
                <template #header>
                  <div class="thing-header">
                    <SvgIcon :name="rule.icon" size="28" />
                    <n-text strong>{{ rule.title }}</n-text>
                  </div>
                </template>
                <n-grid 
                  cols="1 605:2 1000:3 1200:4 1600:5" 
                  x-gap="40" 
                  y-gap="30"
                  item-responsive
                >
                  <n-grid-item 
                    v-for="option in rule.options" 
                    :key="option.key"
                  >
                    <n-space 
                      align="center" 
                      item-style="display: flex;" 
                      :wrap-item="false" 
                    >
                      <n-image 
                        preview-disabled 
                        width="80"
                        :src="option.icon" 
                      />
                      <n-space vertical style="flex-grow: 1;">
                        <span>{{ option.label }}</span>
                        <n-select 
                          v-model:value="rulesModel[index][option.name]"
                          style="max-width: 250px;"
                          :default-value="option.select[0].value"
                          :options="option.select" 
                        />
                      </n-space>
                    </n-space>
                  </n-grid-item>
                </n-grid>
              </n-thing> -->
            </n-tab-pane>
            <n-tab-pane 
              name="master-generation" 
              tab="世界生成"
            >
            </n-tab-pane>
          </n-tabs>
        </n-tab-pane>
        <!-- 洞穴 -->
        <n-tab-pane 
          name="caves" 
          tab="洞穴"
        >
          <n-tabs type="line" size="large">
            <n-tab-pane 
              name="master-rules" 
              tab="世界规则"
            >
          
            </n-tab-pane>
            <n-tab-pane 
              name="master-generation" 
              tab="世界生成"
            >
        
            </n-tab-pane>
          </n-tabs>
        </n-tab-pane>
        <!-- 模组 -->
        <n-tab-pane 
          name="mods" 
          tab="模组"
        >

        </n-tab-pane>
        <!-- 回档 -->
        <n-tab-pane 
          name="back" 
          tab="回档"
        >
        </n-tab-pane>
      </n-tabs>
    </n-card>
  </div>
</template>

<script setup>
import { useWordStore } from '@/stores/modules/word';

const wordStore = useWordStore();

const rules = computed(() => {
  return wordStore.rules;
});

const rulesModel = computed(() => {
  return wordStore.rulesModel;
})

function handleSelect(value) {
  console.log(value);
}
</script>

<style lang="scss" scoped>
.word-setting {
  .setting-panel {
    .list-header {
      display: flex;
      align-items: center;
      font-size: 20px;
      .svg-icon {
        margin-right: 5px;
      }
    }
  }
}
.options {
  display: flex;
  justify-content: space-between;
  .option-item {
    display: flex;
    align-items: center;
    width: calc((100% - 160px) / 5);
    margin-right: 40px;
    &:nth-last-child(1) {
      margin-right: 0;
    }
  }
}
</style>