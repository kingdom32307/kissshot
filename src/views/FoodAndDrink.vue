<template>
  <Header/>
  <div class="header-wrap">
      <div class="right-contents">
          <ul class="pages-wrap">
              <li class="food-and-drink">
                  <a class="text">Food&amp;Drinkについて書きます．</a>
              </li>           
          </ul>
      </div>
  </div>
</template>

<script>
import Header from "../components/general/Header.vue";
export default {
    name: "FoodAndDrink",
    components: { Header }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.header-wrap {
    height: 50px;
    width: 100%;
    background-color: black;
}
.header-wrap {
  list-style-type: none;
}
li {
  display: inline-block;
  margin: 15px;
}
.text {
  color: white;
}
</style>
