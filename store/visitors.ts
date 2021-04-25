import { GetterTree, ActionTree, MutationTree } from 'vuex'
import { Visitor, VisitorState } from '~/dto/Visitor'
import { VISITORS } from '~/constants/store'

export const state = () => ({
  list: [] as Visitor[],
})

export type RootState = ReturnType<typeof state>

export const getters: GetterTree<RootState, RootState> = {
  [VISITORS.GETTERS.LIST]: (state) => state.list,
  [VISITORS.GETTERS.FILTERED_LIST]: (state) => (visitorState: VisitorState) => {
    const predicate = (visitor: Visitor) => visitor.state === visitorState
    return state.list.filter(predicate)
  },
  [VISITORS.GETTERS.WAITING_LIST]: (_, getter) => {
    return getter.filteredList(VisitorState.Waiting)
  },
  [VISITORS.GETTERS.PROCESSED_LIST]: (_, getter) => {
    return getter.filteredList(VisitorState.Processed)
  },
  [VISITORS.GETTERS.PROCESSING_LIST]: (_, getter) => {
    return getter.filteredList(VisitorState.Processing)
  },
}

export const mutations: MutationTree<RootState> = {
  [VISITORS.MUTATIONS.INIT]: (state, name: string) => {
    state.list.push({
      name,
      state: VisitorState.Waiting,
    })
  },
  [VISITORS.MUTATIONS.PROCESS]: (state, name: string) => {
    const predicate = (visitor: Visitor) => visitor.name === name
    const target: Visitor | undefined = state.list.find(predicate)
    if (target) {
      target.state = VisitorState.Processing
    }
  },
  [VISITORS.MUTATIONS.PROCESSED]: (state, name: string) => {
    const predicate = (visitor: Visitor) => visitor.name === name
    const target: Visitor | undefined = state.list.find(predicate)
    if (target) {
      target.state = VisitorState.Processed
    }
  },
}

export const actions: ActionTree<RootState, RootState> = {
  [VISITORS.ACTIONS.INIT]: ({ commit }, payload: { name: string }) => {
    if (payload.name) {
      commit(VISITORS.MUTATIONS.INIT, payload.name)
    }
  },
  [VISITORS.ACTIONS.PROCESS]: ({ commit }, payload: { name: string }) => {
    if (payload.name) {
      commit(VISITORS.MUTATIONS.PROCESS, payload.name)
    }
  },
  [VISITORS.ACTIONS.PROCESSED]: ({ commit }, payload: { name: string }) => {
    if (payload.name) {
      commit(VISITORS.MUTATIONS.PROCESSED, payload.name)
    }
  },
}
