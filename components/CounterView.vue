<template>
  <div class="counter-view">
    <CounterCard
      v-for="(counter, index) in counters"
      :key="index"
      :data="counter"
    />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { COUNTERS, VISITORS } from '~/constants/store'
import CounterCard from '~/components/CounterCard.vue'
const COUNTER_NAMES = process.env.COUNTER_NAMES

export default Vue.extend({
  components: {
    CounterCard,
  },
  data() {
    return {
      names: COUNTER_NAMES,
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

<style scoped lang="scss"></style>
