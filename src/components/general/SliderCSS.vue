<template>
    <ul>
        <li class="img-wrap"><a href="#1"><img src="@/assets/kissshot.png" class="img-slider"></a></li>
        <li class="img-wrap" style="animation-delay: 3.5s"><a href="#2"><img src="@/assets/b1.png" class="img-slider"></a></li>
        <li class="img-wrap" style="animation-delay: 7s"><a href="#3"><img src="@/assets/b2.png" class="img-slider"></a></li>
        <li class="img-wrap" style="animation-delay: 10.5s"><a href="#4"><img src="@/assets/d1.png" class="img-slider"></a></li>
    </ul>
</template>

<script>
  export default {
  }
</script>

<style>
ul{
    list-style: none;
    position: relative;
}
.img-wrap{
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    z-index: 0;
}

.img-wrap{
    animation: slide 14s infinite;/* (a+b)×c=x */
    opacity: 0;
}
@keyframes slide{
    0%{opacity: 0;}
    3.5%{opacity: 1;z-index: 1;}/* b÷x×100=y */
    25%{opacity: 1;}/* 100÷c=z */
    28.5%{opacity: 0;z-index: 0;}/* y+z */
}
ul:hover li{
    animation-play-state:paused;/* マウスを載せると一時停止 */
}
li:first-child{
    position:relative;
}

.img-slider{
    width: 31%;
}
</style>