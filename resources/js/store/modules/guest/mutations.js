import {
    GUEST_UPDATE,
} from './types'

export default {
    [GUEST_UPDATE](state, payload) {
        state.data = payload
    },
}
