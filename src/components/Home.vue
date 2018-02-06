<script>
import { mapState, mapMutations } from 'vuex'
import Header from './header'
import Productos from './productos'
import Banners from './banners'
export default {
  name: 'home',
  computed: mapState(['productos']),
  methods: mapMutations(['LOGIN', 'SETLOGINSTATE']),
  components: {
    Header,
    Productos,
    Banners
  },
  created () {}
}
</script>

<template>
  <div>
    <Header />
    <div class="container-fluid bgWhite">
        <div class="row">
            <div class="col-md-12 title">
                <br>
                <h2 class="text-center">Productos Destacados</h2>
                <hr>
            </div>
        </div>
        <Productos :products="productos" />
        <br>
    </div>
    <img src="../assets/banners/6.jpg" class="img-fluid" alt="">
  </div>
</template>



<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .container{
    width: 100% !important;
  }

  .home{
    margin: 0;
    padding: 0;
  }
  .title{
        padding: 30px;
    }
  .title h2{
    font-size: 25px;
  }

    hr{
        max-width: 100px;
        border: 2px solid #47AD33;
    }

    .bgWhite{
      background: #fff;
    }

</style>
