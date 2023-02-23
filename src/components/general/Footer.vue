<template>
  <div class="footer-wrap">
      <div class="left-contents">

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
      <div class="right-footer-contents">
          <div class="right-wrap">
              <div class="right" @click="top">
                  <p>© Kiss Shot. All rights Reserved.</p>
              </div>
          </div>
      </div>
  </div>
</template>

<script>
export default {
    name: 'Footer',
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
.footer-wrap {
    width: 100%;
    position: relative;
    height: 50px;
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

.right-footer-contents {
    position: relative;
    display: flex;
    order: 2;
    width: 30%;
}
.left-contents{
    display: flex;
    width: 70%;
    order: 1;
    /* margin: 0; */
}

.right-wrap{
    position: relative;
    text-align: left;
    right:10px;
    cursor: pointer;
}

.right{
    color: white;
}

.img {
    width: 50px;
    height: 50px;
}
</style>
