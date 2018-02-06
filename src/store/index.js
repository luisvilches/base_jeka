import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

var products = [
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

var shop = []

function getProductos () {
  return products
}

var state = {
  statusLogin: true,
  title: 'ibatidoss',
  productos: getProductos(),
  totalShop: shop.length,
  shop: shop
}

var mutations = {
  LOGIN (state) {
    state.title = 'Hola mundo desde vuex!!'
    console.log('hola mundo', state.title)
  },
  SETLOGINSTATE (state) {
    if (state.statusLogin) {
      state.statusLogin = false
    } else {
      state.statusLogin = true
    }
  },
  ADD (state, obj) {
    shop.push(obj)
    state.totalShop = shop.length
    console.log(shop)
  }
}

export default new Vuex.Store({
  state,
  mutations
})
