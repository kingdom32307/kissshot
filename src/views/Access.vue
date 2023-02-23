<template>
  <Header/>
  <div class="inner">
    <div class="access-wrap">
      <div class="img-access-wrap">
        <img src="@/assets/kissshot.png" class="img-access">
      </div>
      <div class="access-text">
        <h1>Kiss Shot</h1>
            <p>〒905-0015<br>
            沖縄県名護市大南２丁目９−１ ２F<br>
            TEL：0980-52-5595<br> 
            定休日：年中無休（１月１日のみ休み）<br> 
            営業時間：１３時から翌６時まで（変更あり）
            </p>
      </div>
    </div>
    <div class="right-contents">
      <div class="iframe-wrap">
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3567.7191654979215!2d127.97307641460273!3d26.59338568016681!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x34e4ff617c9d6135%3A0x553686bcd0cb29b8!2z44Kt44K544K344On44OD44OI!5e0!3m2!1sja!2sjp!4v1672594389211!5m2!1sja!2sjp" width="600" height="450" style="border:10;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade" class="iframeClass"></iframe>
      </div>
    </div>
  </div>
  <Footer/>
</template>

<script>
import Header from "../components/general/Header.vue";
import Footer from "../components/general/Footer.vue";
export default {
    name: "Access",
    components: { Header, Footer }
}
</script>

<style>
.inner{
  width: 100%;
  height: 100%;
  display: flex;
  align-items: flex-end;
}

.access-wrap{
  height: 100%;
  width: 45.4%;
  order: 1;
  align-items: stretch;
  flex-wrap: wrap;
  flex-flow: column;
  justify-content: space-around;
  display: flex;
}

.access-text{
  flex: auto;
  flex-wrap: wrap;
  flex-flow: column;
  justify-content: space-around;
}

.img-access-wrap{
  padding: 100px;
  flex: auto;
}

.img-access{
  width:30%;
}

.right-contents{
  width: 54.6%;
  flex: auto;
  order: 2;
  padding: 50px;
}



</style>