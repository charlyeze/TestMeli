import Vue from "vue";
import VueRouter from 'vue-router';

//Importamos Componentes
import Home from './components/Home.vue';
import Resultados from './components/Resultados.vue';
import Detalle from './components/Detalle.vue';

Vue.use(VueRouter);

const routes = [ 
    { path: '/', component: Home },
    { path: '/items', component: Resultados },
    { path: '/items/:id', component: Detalle },
];
  
const router = new VueRouter({ 
    routes,
    mode: 'history'
});

export default router;