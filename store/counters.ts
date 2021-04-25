import { GetterTree, ActionTree, MutationTree } from 'vuex'
import { Counter } from '~/dto/Counter'
import { COUNTERS, VISITORS } from '~/constants/store'

export const state = () => ({
  list: [] as Counter[],
})

export type RootState = ReturnType<typeof state>

export const getters: GetterTree<RootState, RootState> = {
  [COUNTERS.GETTERS.LIST]: (state) => state.list,
  [COUNTERS.GETTERS.IDLE_LIST]: (state) =>
    state.list.filter((counter: Counter) => !counter.processingVisitor),
}

export const mutations: MutationTree<RootState> = {
  [COUNTERS.MUTATIONS.INIT]: (state, names: Array<string>) => {
    state.list = Array.from(
      { length: names.length },
      (_, index): Counter => ({
        name: names[index],
        processedVisitors: [],
        processingVisitor: '',
      })
    )
  },
  [COUNTERS.MUTATIONS.PROCESS_VISITOR]: (
    state,
    { counterName, visitorName }: { counterName: string; visitorName: string }
  ) => {
    const predicate = (bc: Counter) => bc.name === counterName
    const target: Counter | undefined = state.list.find(predicate)
    if (target) {
      target.processingVisitor = visitorName
    }
  },
  [COUNTERS.MUTATIONS.PROCESSED_VISITOR]: (
    state,
    { counterName, visitorName }: { counterName: string; visitorName: string }
  ) => {
    const predicate = (bc: Counter) => bc.name === counterName
    const target: Counter | undefined = state.list.find(predicate)
    if (target && Array.isArray(target.processedVisitors)) {
      target.processedVisitors.push(visitorName)
      target.processingVisitor = ''
    }
  },
}

export const actions: ActionTree<RootState, RootState> = {
  [COUNTERS.ACTIONS.INIT]: ({ commit }, payload: { names: Array<string> }) => {
    if (Array.isArray(payload.names)) {
      commit(COUNTERS.MUTATIONS.INIT, payload.names)
    }
  },
  [COUNTERS.ACTIONS.PROCESS_VISITOR]: async (
    { dispatch, commit },
    payload: { counterName: string; visitorName: string }
  ) => {
    commit(COUNTERS.MUTATIONS.PROCESS_VISITOR, payload)
    dispatch(
      `${VISITORS.NAME}/${VISITORS.ACTIONS.PROCESS}`,
      { name: payload.visitorName },
      { root: true }
    )
    if (await process()) {
      commit(COUNTERS.MUTATIONS.PROCESSED_VISITOR, payload)
      dispatch(
        `${VISITORS.NAME}/${VISITORS.ACTIONS.PROCESSED}`,
        { name: payload.visitorName },
        { root: true }
      )
    }
  },
}

async function process() {
  const timeout: number = (Math.random() + 0.5) * 1000
  return await new Promise((resolve) => {
    setTimeout(() => {
      resolve(true)
    }, timeout)
  })
}
