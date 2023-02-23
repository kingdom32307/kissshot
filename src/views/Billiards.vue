<template>
  <Header/>
  <div class="inner-billiards">
    <div class="billiards-wrap">
      <div class="img-billiards-wrap">
        <img src="@/assets/kissshot.png" class="img-billiards">
      </div>
      <div class="billiards-text">
        <h1>Billiards</h1>
            <p>ビリヤード３台<br>
            利用料金：１時間５００円<br> 
            </p>
      </div>
    </div>
    <div class="right-billiards-contents">
      <img src="@/assets/kissshot.png" class="img-billiards-hanadai">
    </div>
  </div>
  <Footer/>
</template>

<script>
import Header from "../components/general/Header.vue";
import Footer from "../components/general/Footer.vue";
export default {
    name: "Billiards",
    components: { Header, Footer }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.inner-billiards{
  width: 100%;
  height:100%;
  display: flex;
  align-items: flex-end;
}

.billiards-wrap{
  width: 45.4%;
  order: 1;
  align-items: stretch;
  flex-wrap: wrap;
  flex-flow: column;
  justify-content: space-around;
  display: flex;
}

.billiards-text{
    flex-wrap: wrap;
    flex-flow: column;
  justify-content: space-around;
  flex: auto;
}

.right-billiards-contents{
    height:100%;
  width: 54.6%;
  order: 2;
}

.img-billiards-wrap{
  flex: auto;
}

.img-billiards{
    padding-top: 100px;
  width:30%;
}

.img-billiards-hanadai{
  padding-top: 200px;
  width:50%;
  height:50%;
}
</style>
