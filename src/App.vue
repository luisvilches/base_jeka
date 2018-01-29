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
    <Navbar :loginState="status"/>
    <router-view></router-view>
    <Footer/>
  </div>
</template>


<style>
  body,html,#app{
    margin:0;
    padding: 0;
  }


</style>
