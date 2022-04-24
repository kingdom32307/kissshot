<template>
  <div class="slide__wrapper">
    <div
      v-show="index === page"
      v-for="(image,index) in images"
      :key="index"
    >
        <span>{{image}}</span>
        <img 
            :src="image.src" 
            class="image"
        />
    </div>
    <a class="left-btn" @click="nextPage" href="#">&#10094;</a>
    <a class="right-btn" @click="nextPage" href="#">&#10095;</a>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        page:0,
        images:[
          {
            src:require("@/assets/kissshot.png")
          },
          {
            src:require("@/assets/b1.png")
          },
          {
            src:require("@/assets/b2.png")
          },
        ]
      };
    },
    methods: {
      nextPage(){
        if(this.page + 1 >= this.images.length){
          this.page = 0
          return;
        }
        this.page ++;
      },
      prevPage(){
        if(this.page <= 0){
          return;
        }
        this.page --;
      }
    }
  }
</script>

<style>
  .slide__wrapper{
    position:relative;
    width: 40%;
    margin:0 auto;
  }
  .image{
    width: 100%;
  }
  .right-btn{
    position:absolute;
    right:20px;
    top:41%;
    font-size: 50px;
    font-weight: bold;
    color:#fff;
  }
  .left-btn{
    position:absolute;
    left:20px;
    top:41%;
    font-size: 25px;
    font-size: 50px;
    font-weight: bold;
    color:#fff;
  }
</style>