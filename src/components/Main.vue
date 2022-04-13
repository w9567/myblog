<template>
  <div class="main">
    <Head/>
    <div class="container">
      <div class="left">
        <Mine/>
      </div>
      <div class="middle">middle</div>
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
export default {
  components: {Head, Foot, Mine, Music},
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<style scoped>
*{
  padding: 0;
  margin: 0;
  font-family: "Helvetica Neue",Helvetica,"PingFang SC","Hiragino Sans GB","Microsoft YaHei","微软雅黑",Arial,sans-serif;
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
