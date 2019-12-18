<template>
    <div class="page">
        Hola mundo con Vue!!!

        <ul>
            <li>First_name: {{ user.first_name }}</li>
            <li>Last_name: {{ user.last_name }}</li>
        </ul>
        
        <span>Con getters</span>
        <ul>
            <li>First_name: {{ guest_data.first_name }}</li>
            <li>Last_name: {{ guest_data.last_name }}</li>
        </ul>
    </div>
</template>

<script>
    import {mapActions,mapGetters} from 'vuex'
    export default {
        name:'init-page',
        data(){
            return {
                user:{
                    first_name:'...',
                    last_name:'...'
                }
            }
        },
        computed:{
            ...mapGetters(['guest_data'])
        },
        mounted(){
            setTimeout(() => {
                this.mtd_api()
            }, 2000);
        },
        methods:{
            ...mapActions(['get']),
            mtd_api: function(){
                this.get({
                    url:'api/test-api',
                    mutation:'GUEST_UPDATE'
                }).then((response)=>{
                    this.user = response
                })
            }
        }
        
    }
</script>
