/**
 * !Import vue and vuex
 */
import Vue from 'vue'
import Vuex from 'vuex'

/**
 * !Import modules
 */
import guest from './modules/guest/state'

/**
 * !Import Actions
 */
import * as actions from './actions'

Vue.use(Vuex)

export default new Vuex.Store({
    actions,
    modules: {
        guest,
    }
})