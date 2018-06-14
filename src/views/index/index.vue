<!--  -->
<template>
  <div>
    <el-container>
      <el-header class="header">vue-demo</el-header>
      <el-container>
        <el-aside width="200px">
          <div class="box-wrap" style="height:calc(100vh - 60px)">
            <el-scrollbar class="live-srollbar">
              <div class="nav-group">
                <div class="nav-group__title">指令</div>
                <ul class="pure-menu-list">
                  <li class="nav-item">自定义指令</li>
                </ul>
              </div>
            </el-scrollbar>
          </div>
        </el-aside>
        <el-main>
          <input v-model="value" type="text" v-number-only>
          {{value}}不可行
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
import numberOnly from '@/directives/numberOnly' // 水波纹指令
export default {
  data() {
    return {
      value: 0
    }
  },
  directives: {
    numberOnly
  },
  components: {},
  computed: {},
  created() {},
  methods: {}
}
</script>
<style lang='scss' scoped>
  .header{
    background-color: #f2f2f2;
    line-height: 60px;
    text-align: left;
  }
  .nav-group{
    .nav-group__title{
      padding-left: 10px;
      font-size: 12px;
      color: #999;
      line-height: 26px;
      margin-top: 15px;
    }
  }
  .pure-menu-list{
    padding:0 15px;
    margin: 0;
    overflow: hidden;
  }
  .nav-item{
    list-style: none;
    display: block;
    height: 40px;
    color: #444;
    line-height: 40px;
    font-size: 14px;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    font-weight: 400;
  }
</style>