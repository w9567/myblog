<template>
  <div class="music">
    <div class="top">
      <div class="bg">
        <img src="../../assets/images/1.1.jpg" alt="chucuola" />
      </div>
      <audio style="width:100%" autoplay controls loop>
        <source src="http://music.163.com/song/media/outer/url?id=562598065.mp3" type="audio/mpeg">
      </audio>
    </div>
    <div class="more">
      <div class="search">
        <el-input placeholder="请输入内容" v-model="musicName" clearable>
        </el-input>
      </div>
      <div class="list" v-for="i in list" :key="i.id">
        <span>{{ i.mname }}</span>
        <span>{{ i.soner }}</span>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      musicName: '',
      list: [{ mname: '21das', soner: 'asda' },
        { mname: '21das', soner: 'asda' },
        { mname: '21das', soner: 'asda' },
        { mname: '21das', soner: 'asda' },
        { mname: '21das', soner: 'asda' }
      ]
    }
  }
}
</script>

<style scoped>
* {
  padding: 0;
  margin: 0;
}
.music {
  width: 100%;
  text-align: center;
  margin-top: 10px;
}
.top{
  display: flex;
  justify-content: flex-start;
  align-items: center;
}
.bg {
  height: 100px;
}
.bg img {
  width: 100px;
  height: 100px;
  border-radius: 50%;
}
.el-input>>>input{
  caret-color: #facbcb;
}
.more .list{
  border-left-style: dashed;
  border-left-color: #facbcb;
  border-left-width: 2px;
  margin-top: 10px;
  padding: 10px 0;
  border-bottom-style: solid;
  border-bottom-color: #facbcb;
  border-bottom-width: 1px;
  border-radius: 5px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.more .list:hover{
  background-image: linear-gradient(#ffffff, #ffe3e3);
}
@media screen and (max-width:1279px) {
  .bg {
    height: 60px;
  }
  .bg img {
    width: 60px;
    height: 60px;
  }
  .more{
    display: none;
  }
}
</style>
