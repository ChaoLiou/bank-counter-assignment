export const COUNTERS = {
  NAME: 'counters',
  MUTATIONS: {
    INIT: 'init',
    PROCESS_VISITOR: 'processVisitor',
    PROCESSED_VISITOR: 'processedVisitor',
  },
  ACTIONS: {
    INIT: 'init',
    PROCESS_VISITOR: 'processVisitor',
  },
  GETTERS: {
    LIST: 'list',
    IDLE_LIST: 'idleList',
  },
}

export const VISITORS = {
  NAME: 'visitors',
  MUTATIONS: {
    INIT: 'init',
    PROCESS: 'process',
    PROCESSED: 'processed',
  },
  ACTIONS: {
    INIT: 'init',
    PROCESS: 'process',
    PROCESSED: 'processed',
  },
  GETTERS: {
    LIST: 'list',
    FILTERED_LIST: 'filteredList',
    WAITING_LIST: 'waitingList',
    PROCESSED_LIST: 'processedList',
    PROCESSING_LIST: 'processingList',
  },
}
