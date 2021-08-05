<template>
  <nav class="navbarML">
    <div class="container d-flex align-items-center">
      <a href="/">
        <img class="nav-logo"/>
      </a> 
      <div class="input-group">        
        <input type="text" class="form-control" @keyup.enter="buscar()" v-model="textoBuscar" placeholder="Nunca dejes de buscar" aria-describedby="basic-addon1">
        <button type="button" class="input-group-text" id="basic-addon1" @click="buscar()">
          <img class="btn-search" />
        </button>
      </div>  
    </div>
  </nav>
</template>

<script>
export default {
    name: 'Navbar',
    data(){
      return{
        textoBuscar:''
      }
    },
    methods:{
      buscar(){ 
        this.$router.push("/");
        this.$router.push({ path: 'items', query: { search: this.textoBuscar } });
      }
    }

}
</script>

<style>

</style>