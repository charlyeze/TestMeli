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
        this.loadData();
        this.$watch(() => {return this.$route.query;}, () => { this.loadData(); }); 
    },
    data(){
        return{
            query:{},
            objects:[],
            isData: false
        }
    },
    methods:{
        loadData(){
            this.cleanUp();
            this.query = this.$route.query;
            this.loadQuery();
        },
        async loadQuery(){ 
            let query = this.query.search; 
            let res = await this.$api.get_items({params:{query,limit:4}});
            if( res.data ){
                this.objects = res.data.items; 
                this.isData = true;
            }
        },
        cleanUp(){
            this.query = {};
            this.objects = [];
            this.isData = false;
        }
    }
}
</script>

<style>

</style>