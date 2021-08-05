<template>
  <div>
    <NavBar />
    
    <Breadcrumb />

    <div class="container detalle marginTop16 " v-if="isData">
          <div class="d-flex bd-highlight">
            <div class="imgDetalle bd-highlight d-flex justify-content-center">
                <img :src="this.item.picture" />
            </div>
            <div class="tituloDetalle marginTop32 bd-highlight">
                <p>{{ capitalizarPrimeraLetra(this.item.condition) }} - {{ this.item.sold_quantity }} vendidos</p>
                <h2 class="marginTop16">{{ this.item.title }}</h2>
                <h1 class="marginTop32">
                  {{ formatPrice(this.item.price) }}
                  <small>{{ this.item.decimals || '00' }}</small>
                </h1>
                <div class="d-grid marginTop32 marginRight32">
                    <button class="btn btn-primary text-white p-3" type="button">Comprar</button>
                </div>
            </div>
          </div> 
          <div class="desDetalle">
              <h1 class="marginBottom32">Descripción del producto</h1>
              <p class="marginBottom32">
                 {{ this.item.description }}
              </p>
          </div>
      </div>    
  </div>
</template>

<script>
export default {
    name: 'Detalle',
    mounted(){
      this.query = this.$route.params;
      this.loadQuery();
    },
    data(){
      return{
        query:{},
        item:{},
        isData: false
      }
    },
    methods:{
      async loadQuery(){ 
        let query = this.query.id; 
        let res = await this.$api.get_item_id({params:{id:query}});
        if( res.data ){
          this.item = res.data.item;
          this.isData = true;
        }
      },
      formatPrice(price){
            return price.amount.toLocaleString('es-ar', {
                style: 'currency',
                currency: price.currency,
                minimumFractionDigits: 0
            });
      },
      capitalizarPrimeraLetra(str) {
        return str.charAt(0).toUpperCase() + str.slice(1);
      }
    } 
}
</script>

<style>

</style>