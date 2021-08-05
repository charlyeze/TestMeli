<template>
    <div class="minicard" @click="detalleItem()">
        <div class="row " v-if="isLoaded">
            <div class="col-xl-3 imgMini d-flex justify-content-center">
                <img :src="this.item.picture" class="img-fluid" />
            </div>
            <div class="col-xl-9 detalleMini">
                <div class="d-flex bd-highlight">
                    <div class="pl-2 bd-highlight">
                        <h2>
                            {{ formatPrice(this.item.price) }} 
                            <img v-if="this.item.free_shipping" src="../../assets/ic_shipping.png"/>
                        </h2>                    
                    </div> 
                    <div class="ms-auto d-flex align-items-end bd-highlight "> 
                        <p>{{ this.item.state }}</p>
                    </div>
                </div>
                
                <h3 class="pl-2">{{ this.item.title }}</h3>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'CardProducto',
    props:{
        object:{
            type: Object
        }
    },
    data(){
        return{
            item:{},
            isLoaded:false
        }
    },
    mounted(){ 
        this.item = this.object;
        this.isLoaded = true; 
    },
    methods:{
        formatPrice(price){
            return price.amount.toLocaleString('es-ar', {
                style: 'currency',
                currency: price.currency,
                minimumFractionDigits: 0
            });
        },
        detalleItem(){
            this.$router.push({ path: `/items/${this.item.id}` });
        }
    }

}
</script>

<style>

</style>