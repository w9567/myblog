<template>
  <div class="header">
    <div class="logo">
      <img
        src="../../assets/images/logo.png"
        width="80"
        height="80"
        alt="theme"
      />
      <span>theme</span>
    </div>
    <ul ref="navmenu" class="nav-menu">
      <li><span @click="gomenu">个人页</span></li>
      <li><span @click="gomenu">喜好廊</span></li>
      <li><span @click="gomenu">随手记</span></li>
      <li><span @click="gomenu">留言墙</span></li>
    </ul>
    <div @click="tox" ref="ttx" class="title">
      <div class="firsth"></div>
      <div class="secondh"></div>
      <div class="thirdh"></div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {}
  },
  methods: {
    tox () {
      let titles = this.$refs.ttx
      let menus = this.$refs.navmenu
      titles.classList.toggle('active')
      menus.classList.toggle('open')
    },
    gomenu (option) {
      console.log('option', option)
    }
  }
}
</script>

<style scoped>
ul{
  margin: 0;
  padding: 0;
}
body{
  margin: 0;
  padding: 0;
  font-size: 20px;
  color: #6b6869;
  list-style: none;
}
.router-link-active{
  text-decoration: none;
}
li{
  list-style: none;
}
a:hover{
  color: deeppink;
  /* font-size: larger; */
}
a::after{
  content: '';
  position: relative;
  left: -50%;
}
a:hover::after{
  content: '';
  display: block;
  position: relative;
  left: 0;
  border-bottom-style: solid;
  transition: 0.4s all ease-in-out;
  transform: translate(50% 50%);
  transform-origin:50% 0;
}
.header {
  width: 100%;
  height: 80px;
  min-height: 80px;
  display: flex;
  background-color: rgb(249 197 197 / 90%);
}
.header .logo {
  flex: 1;
  font-size: 20px;
  font-weight: 600;
  display: flex;
  align-items: center;
}
.nav-menu {
  flex: 1;
  display: flex;
  justify-content: space-around;
  align-items: center;
}
.title{
  margin: auto 0;
}
.title div{
  display: none;
  width: 40px;
  height: 5px;
  margin-top: 5px;
  background-color: #000000;
}
/* 屏幕宽度小于768px时 */
@media screen and (max-width:768px){
  .logo img{
    display: none;
  }
  .nav-menu{
    position: absolute;
    top: 80px;
    right: 0;
    bottom: 0;
    width: 50vw;
    height: calc(100vh - 80px);
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    background-color: rgb(249 197 197 / 90%);
    transform: translateX(100%);
    /* transform-origin: 100% 100%;
    transform: translateX(100%) rotate(45deg) ; */
    transition: .4s ease-in-out;
  }
  .nav-menu li{
    margin-top: 10vh;
  }
  .nav-menu.open{
    transform: translateX(0);
    transition: 0.4s ease-in-out;
  }
  .title div{
    display: block;
    transition: 0.4s ease-in-out;
  }
  /* 设置三横线转换为x取消按钮 */
  .title.active div{
    transition: 0.3s ease-in-out ;
  }
  .title.active .firsth{
    transform: rotate(45deg) translate(5px , 8px);
  }
  .title.active .secondh{
    transform: translate(100%);
    transition: 0.2s ease-in-out;
  }
  .title.active .thirdh{
    transform: rotate(-45deg) translate(5px , -8px);
  }
}

</style>
