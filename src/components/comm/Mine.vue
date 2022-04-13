<template>
  <div class="Mine">
    <!-- 手风琴效果 -->
    <el-collapse v-model="activeNames" v-show="ismine">
      <el-collapse-item title="我的信息" name="1">
        <!-- 描述列表 -->
        <el-descriptions class="margin-top" :column="2" size="mini" border>
          <el-descriptions-item>
            <template slot="label">
              <i class="el-icon-user"></i>
              姓名：
            </template>
            异川
          </el-descriptions-item>
          <el-descriptions-item>
            <template slot="label">
              <i class="el-icon-mobile-phone"></i>
              QQ号：
            </template>
            956792115
          </el-descriptions-item>
          <el-descriptions-item>
            <template slot="label">
              <i class="el-icon-location-outline"></i>
              居住地：
            </template>
            福建
          </el-descriptions-item>
          <el-descriptions-item>
            <template slot="label">
              <i class="el-icon-tickets"></i>
              备注：
            </template>
            <el-tag size="small">菜鸟</el-tag>
          </el-descriptions-item>
          <el-descriptions-item>
            <template slot="label">
              <i class="el-icon-office-building"></i>
              个人说明：
            </template>
            奇变偶不变，符号看象限
          </el-descriptions-item>
        </el-descriptions>
      </el-collapse-item>
    </el-collapse>
  </div>
</template>

<script>
import JSC from '../../assets/js/JudgeScreen'
export default {
  data () {
    return {
      activeNames: '0',
      ismine: true
    }
  },
  methods: {
    getCWidth () {
      return document.body.clientWidth
    }
  },
  computed: {
    cwh () {
      return JSC.judgeScreen()
    }
  },
  mounted: function () {
    window.onresize = () => {
      if (document.body.clientWidth < 675) {
        this.ismine = false
      } else {
        this.ismine = true
      }
    }
  }
}
</script>

<style scoped>
* {
  padding: 0;
  margin: 0;
}
.Mine {
  width: 100%;
  height: 100%;
}
.el-collapse >>> .el-collapse-item__content {
  padding-bottom: 0;
}

</style>
