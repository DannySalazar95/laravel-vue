export default function (Vue) {
    Vue.httpCode = {
        accordingStatus(response) {
            if (response.status == 400) {
                console.log('packages/http_code/index.js: Error 400')
            }

            if (response.status == 403) {
                console.log('packages/http_code/index.js: Error 403')
            }
        },
    }

    Object.defineProperties(Vue.prototype, {
        $redirect: {
            get: () => {
                return Vue.httpCode
            }
        }
    })
}