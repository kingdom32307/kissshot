<template>
  <Header/>
  <SliderCSS/>
  <div class="hello">
    <h1>{{ msg }}</h1>
  </div>
  <Footer/>
</template>

<script>
import Header from './general/Header.vue'
import SliderCSS from './general/SliderCSS.vue'
import Footer from "../components/general/Footer.vue";
export default {
  name: 'Top',
  components: {
    Header,
    SliderCSS,
    Footer,
},
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
