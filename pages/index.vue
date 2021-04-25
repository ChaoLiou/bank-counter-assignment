<template>
  <div class="index">
    <CounterView />
    <TicketTaker />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import TicketTaker from '~/components/TicketTaker.vue'
import CounterView from '~/components/CounterView.vue'
export default Vue.extend({
  components: { TicketTaker, CounterView },
})
</script>

<style></style>
