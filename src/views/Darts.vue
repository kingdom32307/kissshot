<template>
  <Header/>
  <div class="inner-darts">
    <div class="darts-wrap">
      <div class="img-darts-wrap">
        <img src="@/assets/kissshot.png" class="img-darts">
      </div>
      <div class="darts-text">
        <h1>Darts</h1>
            <p>ダーツ３台<br>
            利用料金：１時間５００円<br> 
            </p>
      </div>
    </div>
    <div class="right-darts-contents">
      <img src="@/assets/kissshot.png" class="img-darts-hanadai">
    </div>
  </div>
  <Footer/>
</template>

<script>
import Header from "../components/general/Header.vue";
import Footer from "../components/general/Footer.vue";
export default {
    name: "Darts",
    components: { Header, Footer }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.inner-darts{
  width: 100%;
  height:100%;
  display: flex;
  align-items: flex-end;
}

.darts-wrap{
  height:100%;
  width: 45.4%;
  order: 1;
  align-items: stretch;
  flex-wrap: wrap;
  flex-flow: column;
  justify-content: space-around;
  display: flex;
}

.darts-text{
    flex-wrap: wrap;
    flex-flow: column;
  justify-content: space-around;
  flex: auto;
}

.right-darts-contents{
    height:100%;
    flex:auto;
  width: 54.6%;
  order: 2;
}

.img-darts-wrap{
  flex: auto;
}

.img-darts{
    padding-top: 100px;
  width:30%;
}

.img-darts-hanadai{
  padding-top: 200px;
  width:50%;
  height:50%;
}
</style>
