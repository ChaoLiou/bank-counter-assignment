import config from './nuxt.config'

export default {
  ...config,
  env: {
    COUNTER_NAMES: ['Amy', 'Bob', 'Cory', 'Dora', 'Error', 'Failed'],
  },
}
