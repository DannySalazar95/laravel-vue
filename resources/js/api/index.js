/**
 * API
 * !backend: Laravel
 */

export default {

    get(request, success, danger) {
        axios.get(request.url)
            .then(
                res => {
                    success(res)
                },
                err => {
                    window.Vue.httpCode.accordingStatus(err.response)
                    danger(err.response)
                }
            )
            .catch((error) => {
                console.log(`Error-get en api/index.js: ${error}`)
            });
    },

    post(request, success, danger) {
        axios.post(request.url, request.params)
            .then(
                res => {
                    success(res)
                },
                err => {
                    window.Vue.httpCode.accordingStatus(err.response)
                    danger(err.response)
                }
            ).catch((error) => {
                console.log(`Error-post en api/index.js: ${error}`)
            });
    },


    update(request, success, danger) {
        axios.patch(request.url, request.params)
            .then(
                res => {
                    success(res)
                },
                err => {
                    window.Vue.httpCode.accordingStatus(err.response)
                    danger(err.response)
                }
            ).catch((error) => {
                console.log(`Error-update en api/index.js: ${error}`)
            });
    },

    destroy(request, success, danger) {
        axios.delete(request.url, { data: request.params ? request.params : {} })
            .then(
                res => {
                    success(res)
                },
                err => {
                    window.Vue.httpCode.accordingStatus(err.response)
                    danger(err.response)
                }
            ).catch((error) => {
                console.log(`Error-destroy en api/index.js: ${error}`)
            });
    },

    postWithMultipartFormData(request, success, danger) {
        let config = {
            headers: {
                'content-type': 'multipart/form-data'
            }
        }
        axios.post(request.url, request.formData, config)
            .then(
                res => {
                    success(res)
                },
                err => {
                    window.Vue.httpCode.accordingStatus(err.response)
                    danger(err.response)
                }
            ).catch((error) => {
                console.log(`Error-post-with-multipart-form-data en api/index.js: ${error}`)
            });
    },

}