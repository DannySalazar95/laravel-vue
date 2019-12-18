import api from '../api'

/**********************************************************************
 * *Actions for crud's
 * !do not modify, actions used by all components
 **********************************************************************/


export const get = ({ commit }, request) => {
    return new Promise((resolve, reject) => {
        window.eventBus.$emit('loading', true)
        api.get(request, (response) => {
            if (request.mutation)
                commit(request.mutation, response.data)
            resolve(response.data)
            window.eventBus.$emit('loading', false)
        }, (error) => {
            reject(error)
            window.eventBus.$emit('loading', false);
        })
    });
}

export const post = ({ commit }, request) => {
    if (window.eventBus) window.eventBus.$emit('loading', true)
    return new Promise((resolve, reject) => {
        api.post(request, (response) => {
            if (request.mutation)
                commit(request.mutation, response.data)
            resolve(response.data)
            if (window.eventBus) window.eventBus.$emit('loading', false)
        }, (error) => {
            reject(error.data.errors)
            if (window.eventBus) window.eventBus.$emit('loading', false)
        })
    });
}

export const destroy = ({ commit }, request) => {
    window.eventBus.$emit('loading', true)
    return new Promise((resolve, reject) => {
        api.destroy(request, (response) => {
            if (request.mutation)
                commit(request.mutation, response.data)
            resolve(response.data)
            window.eventBus.$emit('loading', false)

        }, (error) => {
            reject(error)
            window.eventBus.$emit('loading', false)
        })
    });
}

export const update = ({ commit }, request) => {
    window.eventBus.$emit('loading', true)
    return new Promise((resolve, reject) => {
        api.update(request, (response) => {
            if (request.mutation)
                commit(request.mutation, response.data)
            resolve(response.data)
            window.eventBus.$emit('loading', false)
        }, (error) => {
            reject(error.data.errors)
            window.eventBus.$emit('loading', false)
        })
    });
}

export const post_with_multipart_form_data = ({ commit }, request) => {
    window.eventBus.$emit('loading', true)
    return new Promise((resolve, reject) => {
        api.postWithFile(request, (response) => {
            if (request.mutation)
                commit(request.mutation)
            resolve(response.data)
            window.eventBus.$emit('loading', false)
        }, (error) => {
            reject(error.data.errors)
            window.eventBus.$emit('loading', false)
        })
    });
}

export const execute_commit = ({ commit }, request) => {
    if (request.payload)
        commit(request.mutation, request.payload)
    else
        commit(request.mutation)
}



