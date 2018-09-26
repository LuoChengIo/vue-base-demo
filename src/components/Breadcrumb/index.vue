<template>
  <div class="app-breadcrumb ml10 mr10">
    <span class="back mr10 poi" v-if="isBack" @click="goBack"></span>
    <el-breadcrumb class="dib vm" separator="/" >
      <transition-group name="breadcrumb">
        <el-breadcrumb-item v-for="(item, index)  in levelList" :key="item.path" v-if='item.meta.title' :class="{'b-last':index==levelList.length-1}">
          <span v-if='item.redirect==="noredirect"||index==levelList.length-1' class="no-redirect">{{item.meta.title}}</span>
          <router-link v-else :to="item.redirect||item.path">{{item.meta.title}}</router-link>
        </el-breadcrumb-item>
      </transition-group>
    </el-breadcrumb>
  </div>
</template>

<script>
export default {
  props: {
    isBack: {
      type: Boolean,
      default: false
    }
  },
  created() {
    this.getBreadcrumb()
  },
  data() {
    return {
      levelList: null
    }
  },
  watch: {
    $route() {
      this.getBreadcrumb()
    }
  },
  methods: {
    getBreadcrumb() {
      const matched = this.$route.matched.filter(item => item.name)
      this.levelList = matched
    },
    goBack() {
      this.$router.go(-1)
    }
  }
}
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
  .app-breadcrumb{
    .el-breadcrumb {
      line-height: 40px;
    }
  }
  .back{
    display: inline-block;
    vertical-align: middle;
    width: 18px;
    height: 18px;
    background: url(~@/assets/fanhui.png)no-repeat center;
  }
</style>
