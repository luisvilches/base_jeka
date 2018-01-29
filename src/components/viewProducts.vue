<script>
import Productos from './productos'
export default {
  name: 'about',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  components: {
    Productos
  },
  created () {
    this.cargarProductos()
  },
  methods: {
    cargarProductos: function () {
      this.products = [
        {
          img: 'http://www.figuraypeso.com/Img_hlf/portada/productos-desayuno.png',
          name: 'Herbalife, Batido Nutricional',
          price: '29.200',
          description: 'DELICIOSO ALIMENTO EN POLVO HERBALIFE QUE SE RECONSTITUYE CON CUALQUIER TIPO DE LÍQUIDO (AGUA, JUGO, YOGURT O LECHE DESCREMADA).'
        },
        {
          img: 'http://az31823.vo.msecnd.net/content/en-us/img/catalog/products/0565_xtracaladvanced_us.png',
          name: 'Herbalife, Te Bebida Instantánea de Hierbas 100g.',
          price: '40.900',
          description: 'QUEMADOR DE GRASAS, DURANTE MILES DE AÑOS LAS HIERBAS HAN TENIDO UN PAPEL IMPORTANTE EN LA PREPARACIÓN DE DELICIOSAS COMIDAS Y BEBIDAS. COMBINANDO LA ANTIGUA SABIDURÍA DE LAS HIERBAS CON LA IMAGINACIÓN DEL MUNDO MODERNO, HERBALIFE HA CREADO LA FÓRMULA DE LA BEBIDA INSTANTÁNEA DE HIERBAS THERMOJETICS™.'
        },
        {
          img: 'http://az31823.vo.msecnd.net/content/en-us/img/catalog/products/3092_f1_alternativeproteins_vanilla_400_us.png',
          name: 'Herbalife, Te Bebida Instantánea de Hierbas 100g.',
          price: '40.900',
          description: 'QUEMADOR DE GRASAS, DURANTE MILES DE AÑOS LAS HIERBAS HAN TENIDO UN PAPEL IMPORTANTE EN LA PREPARACIÓN DE DELICIOSAS COMIDAS Y BEBIDAS. COMBINANDO LA ANTIGUA SABIDURÍA DE LAS HIERBAS CON LA IMAGINACIÓN DEL MUNDO MODERNO, HERBALIFE HA CREADO LA FÓRMULA DE LA BEBIDA INSTANTÁNEA DE HIERBAS THERMOJETICS™.'
        },
        {
          img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQAUOSI5CT7pjAYMHA_DOVyN5_VwVdpaeAQOaiPMYBVjZVk7RPs',
          name: 'Herbalife, Te Bebida Instantánea de Hierbas 100g.',
          price: '40.900',
          description: 'QUEMADOR DE GRASAS, DURANTE MILES DE AÑOS LAS HIERBAS HAN TENIDO UN PAPEL IMPORTANTE EN LA PREPARACIÓN DE DELICIOSAS COMIDAS Y BEBIDAS. COMBINANDO LA ANTIGUA SABIDURÍA DE LAS HIERBAS CON LA IMAGINACIÓN DEL MUNDO MODERNO, HERBALIFE HA CREADO LA FÓRMULA DE LA BEBIDA INSTANTÁNEA DE HIERBAS THERMOJETICS™.'
        }
      ]
    }
  }
}
</script>

<template>
  <div class="container-fluid">
    <div class="row">
        <div class="col-md-12 title">
            <br>
            <h2 class="text-center">Nuestros Productos</h2>
            <hr>
        </div>
    </div>
    <div class="row">
      <Productos :products="products" />
    </div>
  </div>
</template>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .title{
    padding: 30px;
  }

  hr{
    max-width: 100px;
    border: 2px solid #47AD33;
  }
</style>
