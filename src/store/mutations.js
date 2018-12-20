import * as types from './mutation-types'

const mutations = {
  [types.TEST] (state, data) {
    state.test = data
  }
}

export default mutations
