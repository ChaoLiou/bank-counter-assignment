<template>
  <div
    class="counter-card"
    :class="{ 'counter-card_busy': data.processingVisitor }"
  >
    <div class="counter-card__name">{{ data.name }}</div>
    <div class="counter-card__processing-visitor">
      <strong>processing:</strong> {{ data.processingVisitor || 'idle' }}
    </div>
    <div class="counter-card__processed-visitor">
      <strong>processed:</strong>
      <div>{{ data.processedVisitors.join(',') }}</div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue, { PropOptions } from 'vue'
import { Counter } from '~/dto/Counter'

export default Vue.extend({
  props: {
    data: {
      type: Object,
      default() {
        return {
          name: '',
          processingVisitor: '',
          processedVisitors: [],
        }
      },
    } as PropOptions<Counter>,
  },
})
</script>

<style scoped lang="scss">
.counter-card {
  display: grid;
  grid-template-rows: 2fr 1fr 2fr;
  height: 100px;
  background-color: rgba(0, 128, 0, 0.5);
  margin: 8px;
  padding: 8px;
  border-radius: 8px;
  &__name {
    font-size: 36px;
    color: white;
  }
  &_busy {
    background-color: rgba(255, 0, 0, 0.5);
  }
  &__processed-visitor {
    overflow: auto;
  }
}
</style>
