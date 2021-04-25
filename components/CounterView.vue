<template>
  <div class="counter-view">
    <div>
      <div>counter</div>
      <div>processing</div>
      <div>processed</div>
    </div>
    <div v-for="(counter, index) in counters" :key="index">
      <div>{{ counter.name }}</div>
      <div>{{ counter.processingVisitor || 'idle' }}</div>
      <div>{{ counter.processedVisitors.join(',') }}</div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { COUNTERS, VISITORS } from '~/constants/store'

export default Vue.extend({
  data() {
    return {
      names: ['Amy', 'Bob', 'Cory', 'Dora'],
    }
  },
  computed: {
    counters() {
      return this.$store.getters[`${COUNTERS.NAME}/${COUNTERS.GETTERS.LIST}`]
    },
  },
  watch: {
    names: {
      immediate: true,
      handler(value) {
        this.$store.dispatch(`${COUNTERS.NAME}/${COUNTERS.ACTIONS.INIT}`, {
          names: value,
        })
      },
    },
  },
  mounted() {
    setInterval(() => {
      const idleCounters = this.$store.getters[
        `${COUNTERS.NAME}/${COUNTERS.GETTERS.IDLE_LIST}`
      ]
      const waitingVisitors = this.$store.getters[
        `${VISITORS.NAME}/${VISITORS.GETTERS.WAITING_LIST}`
      ]
      if (idleCounters.length > 0 && waitingVisitors.length > 0) {
        const counterTarget = idleCounters[0]
        const visitorTarget = waitingVisitors[0]
        this.$store.dispatch(
          `${COUNTERS.NAME}/${COUNTERS.ACTIONS.PROCESS_VISITOR}`,
          {
            counterName: counterTarget.name,
            visitorName: visitorTarget.name,
          }
        )
      }
    }, 100)
  },
})
</script>

<style scoped>
.counter-view > div {
  display: grid;
  grid-template-columns: 100px 100px auto;
}
</style>
