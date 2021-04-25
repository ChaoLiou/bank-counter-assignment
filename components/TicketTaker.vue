<template>
  <div class="ticket-taker">
    <div>waiting: {{ waitingVisitors.length }}</div>
    <button @click="initVisitor">NEXT {{ nextVisitorName }}</button>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { VISITORS } from '~/constants/store'

export default Vue.extend({
  computed: {
    nextVisitorName() {
      return (
        this.$store.getters[`${VISITORS.NAME}/${VISITORS.GETTERS.LIST}`]
          .length + 1
      )
    },
    waitingVisitors() {
      return this.$store.getters[
        `${VISITORS.NAME}/${VISITORS.GETTERS.WAITING_LIST}`
      ]
    },
  },
  methods: {
    initVisitor() {
      this.$store.dispatch(`${VISITORS.NAME}/${VISITORS.ACTIONS.INIT}`, {
        name: this.nextVisitorName,
      })
    },
  },
})
</script>

<style></style>
