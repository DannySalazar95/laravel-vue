<template>
    <div>
        <router-view></router-view>
        <loading v-show="loading"/>
    </div>
</template>

<script>
    import Loading  from './components/loading'
    
    export default {
        name: 'app',
        components:{
            Loading
        },
        data(){
            return {
                loading:true
            }
        },
        created(){
            this.mtd_createEventBus()
            this.mtd_onEventBusLoading()
        },
        beforeDestroy() {
            window.eventBus.$off('loading', function () {
                this.loading = false
            }.bind(this))
        },
        methods:{
            mtd_createEventBus: function(){
                window.eventBus = new Vue;
                console.info('creando event bus in /resources/App.vue')
            },
            mtd_onEventBusLoading: function(){
                window.eventBus.$on('loading', function (state) {
                    this.loading = state
                }.bind(this));
                console.info('escuchando evento loading por vue-bus in /resources/App.vue')
            },
        }
    }
</script>
