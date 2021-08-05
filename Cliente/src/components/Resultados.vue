<template>
    <div>
        <NavBar />

        <Breadcrumb />

        <div class="container listado" v-if="isData">
            <div v-for="(object, index) in objects" :key="index">
                <CardProducto :object="object"/>
                <hr class="bgFondo">
            </div>            
        </div>
    </div>
</template>

<script>
export default {
    name: 'Resultados',
    mounted(){ 
        this.query = this.$route.query;
        this.loadQuery();
    },
    data(){
        return{
            query:{},
            objects:[],
            isData: false
        }
    },
    methods:{
        async loadQuery(){
            let query = this.query.search; 
            let res = await this.$api.get_items({params:{query,limit:4}});
            if( res.data ){
                this.objects = res.data.items; 
                this.isData = true;
            }
        }
    }
}
</script>

<style>

</style>