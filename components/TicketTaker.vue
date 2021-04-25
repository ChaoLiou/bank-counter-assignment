<template>
  <div class="ticket-taker">
    <div class="ticket-taker__info">waiting: {{ waitingVisitors.length }}</div>
    <button class="ticket-taker__action" @click="initVisitor">
      NEXT {{ nextVisitorName }}
    </button>
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

<style scoped lang="scss">
.ticket-taker {
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  &__action {
    width: 80px;
    height: 80px;
    border-radius: 50%;
    border: none;
    background-color: #1867c0;
    border-color: #1867c0;
    color: white;
    box-shadow: 0 3px 5px -1px rgb(0 0 0 / 20%), 0 6px 10px 0 rgb(0 0 0 / 14%),
      0 1px 18px 0 rgb(0 0 0 / 12%);
    font-size: 16px;
  }
}
</style>
