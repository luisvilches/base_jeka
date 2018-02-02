<script>
import Navbar from './components/Nav'
import Footer from './components/footer'

export default {
  name: 'app',
  data () {
    return {
      title: 'ibatidos',
      status: true
    }
  },
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


</style>
