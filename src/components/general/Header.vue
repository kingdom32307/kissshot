<template>
  <div class="header-wrap">
      <div class="left-header-contents">
          <div class="logo-wrap">
              <div class="logo" @click="top">
                  <img class="img" src="@/assets/logo.png">
              </div>
          </div>
      </div>
      <div class="right-header-contents">
          <ul class="pages-wrap">
              <li class="text-wrap">
                  <span class="text" @click="access">Access</span>
              </li>  
              <li class="text-wrap">
                  <span class="text" @click="billiards">Billiards</span>
              </li>
              <li class="text-wrap">
                  <span class="text" @click="darts">Darts</span>
              </li>
              <li class="text-wrap">
                  <span class="text" @click="foodanddrink">Food&amp;Drink</span>
              </li>
              <li class="text-wrap">
                  <span class="text" @click="events">Events</span>
              </li>          
          </ul>
      </div>
  </div>
</template>

<script>
export default {
    name: 'Header',
    methods:{
        top(){
            this.$router.push('/')
        },
        access(){
            this.$router.push('/access')
        },
        billiards(){
            this.$router.push('/billiards')
        },
        darts(){
            this.$router.push('/darts')
        },
        foodanddrink(){
            this.$router.push('/foodanddrink')
        },
        events(){
            this.$router.push('/events')
        }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.header-wrap {
    height: 50px;
    width: 100%;
    background-color: black;
    display: flex;
}

.pages-wrap {
    width: 100px;
}

.text-wrap {
    width: 100px;
    display: inline;
}
.text {
  margin: 15px;
  color: white;
  cursor: pointer; 
}

.right-header-contents {
    flex: auto;
    width:35%;
}
.left-header-contents{
    flex: auto;
    width:65%;
}

.logo-wrap{
    width: 100px;
    position: relative;
    text-align: left;
    left:10px;
    cursor: pointer;
}

.img {
    width: 50px;
    height: 50px;
}
</style>
