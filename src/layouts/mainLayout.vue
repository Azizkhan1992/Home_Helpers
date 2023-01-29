<template>
<div class="main-layout" >
    <homeHeader />

    <HomePage/>

    <homeFooter />
</div>
</template>

<script>
import homeHeader from '@/components/header.vue';
import homeFooter from '@/components/footer.vue';
import HomePage from '@/views/HomePage.vue';
export default {
    name: 'main-layout',
    components: {
    homeHeader,
    homeFooter,
    HomePage
},
    data(){
        return{
            isHomeCheck: false
        }
    },
    
    methods: {
        // changechecker() {
        //     this.$store.commit('changeChecker', false)
        // }
    }
}
</script>
<style lang="scss">

</style>
