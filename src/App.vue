<script>
import { mapState, mapMutations } from 'vuex'
import Navbar from './components/Nav'
import Footer from './components/footer'
export default {
  name: 'app',
  data () {
    return {
      title: null,
      status: null
    }
  },
  created () {
    this.status = this.$store.state.statusLogin
    this.title = this.$store.state.title
  },
  computed: mapState(['statusLogin', 'title']),
  methods: mapMutations(['loginChange']),
  components: {
    Navbar,
    Footer
  }
}
</script>

<template>
  <div id="app">
    <div class="boxshadow">
      <Navbar :loginState="status"/>
      <router-view></router-view>
      <Footer/>
    </div>
  </div>
</template>


<style>
  #app{
    padding: 40px;
  }

  body{
    background: #f6f6fc;
    font-family: 'Montserrat', sans-serif;
  }
  .boxshadow{
    box-shadow: 0px 0px 50px 0px rgba(0,0,0,0.2);
  }

  @media (max-width:768px){
    #app{
      padding: 5px;
    }
  }

</style>
