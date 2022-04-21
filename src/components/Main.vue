<template>
  <div class="main">
    <div class="starbg">
      <Star/>
    </div>
    <Head/>
    <div class="container">
      <div class="left">
        <Mine/>
      </div>
      <div class="middle">
        <div v-if="isoptions">
          <Empty/>
        </div>
        <div v-else-if="!isoptions">
          <component :is="options"></component>
        </div>
      </div>
      <div class="right">
        <Music/>
      </div>
    </div>
    <footer>
      <Foot/>
    </footer>
  </div>
</template>

<script>
import Head from './page/Head.vue'
import Foot from './page/Foot.vue'
import Mine from './comm/Mine.vue'
import Music from './comm/Music.vue'
import Love from './comm/LoveGallery.vue'
import Notes from './comm/Notes.vue'
import Simp from './comm/SimplePersonal.vue'
import Message from './comm/MessageWall.vue'
import Empty from './page/empty.vue'
import Star from './otherSet/starBg.vue'
export default {
  components: {Head, Foot, Mine, Music, Love, Notes, Simp, Message, Empty, Star},
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      options: null,
      isoptions: true
    }
  },
  methods: {
    // gomenu (val) {
    //   this.options = val
    // }
  }
}
</script>

<style scoped>
*{
  padding: 0;
  margin: 0;
  font-family: "Helvetica Neue",Helvetica,"PingFang SC","Hiragino Sans GB","Microsoft YaHei","微软雅黑",Arial,sans-serif;
}
body{
  background-attachment: fixed;
  overflow: hidden;
}
.starbg{
  width: 100%;
  height: 100vh;
  background: #000;
  background-attachment: fixed;
}
.container{
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-around;
  align-items:flex-start;
}
.container .left{
  width: 20%;
}
.container .middle{
  flex: 1;
  background-color:rgb(119, 152, 218);
}
.container .right{
  width: 25%;
  position: relative;
}
footer{
  position: absolute;
  bottom: 0;
  text-align: center;
  width: 100%;
}
@media screen and (max-width:1279px) {
  .container{
    flex-direction: column;
  }
  .container .left{
    width: 100%;
  }
  .container .middle{
    width: 100%;
  }
  .container .right{
    width: 100%;
    position: fixed;
    left: 0;
    bottom: 0;
    z-index: 2;
    background: rgb(255, 255, 255);
  }
  footer::after{
    content: '';
    display: block;
    height: 80px;
  }
}

</style>
