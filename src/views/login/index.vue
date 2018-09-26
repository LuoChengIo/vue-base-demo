<!-- 登录页面 -->
<template>
 <div class="rel hp100">
   <div class="login-bg"></div>
   <div class="login-box clearfix">
     <div class="l hp100 left-ct">
       <div class="text-white">
          <p class="f30">Welcome!</p>
          <h2 class="f30 n">demo管理系统</h2>
       </div>
     </div>
    <div class="l hp100 bg-white right-ct">
      <h2 class="f30 n text-light login-tie">Login</h2>
    </div>
   </div>
 </div>
</template>

<script>
import { baseImgURL } from '@/utils/index'
export default {
  data() {
    return {
      loginForm: {
        userName: '', // 用户名
        password: '', // 密码
        captcha: '', // 验证码
        uid: 0 // 验证码id
      },
      loading: false,
      codeRandom: new Date().getTime()
    }
  },
  components: {},
  computed: {
    getCode() {
      return baseImgURL + '/captcha.jpg?uid=' + this.codeRandom
    }
  },
  methods: {
    refreshCode() { // 刷新验证码
      this.codeRandom = new Date().getTime()
    },
    submitForm(formName) { // 提交验证
      if (!this.loginForm.userName) {
        this.$message.warning('请填写您的用户名~')
        return
      }
      if (!this.loginForm.password) {
        this.$message.warning('请填写您的密码~')
        return
      }
      if (!this.loginForm.captcha) {
        this.$message.warning('请填写验证码~')
        return
      }
      this.loginForm.uid = this.codeRandom
      this.loading = true
      this.$store.dispatch('Login', this.loginForm).then(() => {
        this.loading = false
        this.$router.push({ path: '/' })
      }).catch((e) => {
        console.log(e)
        this.loading = false
      })
    }
  }
}
</script>

<style lang='scss' scoped>
  .login-bg{
    position:absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    background-image: url('~@/assets/login/login-bg4.jpg');
    background-attachment: fixed;
    &:after{
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background-color: rgba(0, 0, 0, .3);
    }
  }
 .login-box{
   position: absolute;
   top: 50%;
   left: 50%;
   width: 760px;
   height: 430px;
   margin-top: -215px;
   margin-left: -380px;
  //  background: hsla(0,0%,100%,.3); 
   overflow: hidden;
  //  border-radius: 8px;
   z-index: 1;
   box-shadow: 0px 0px 30px 10px rgba(0, 0, 0, 0.2);
  //  &:before{
  //    content: '';
  //     position: absolute;
  //     top: 0; 
  //     right: 0; 
  //     bottom: 0; 
  //     left: 0; 
  //     z-index: -1;
  //     filter: blur(20px);
  //     background-position: center;
  //     background-repeat: no-repeat;
  //     background-size: cover;
  //     background-image: url('~@/assets/login/login-bg2.jpg');
  //     background-attachment: fixed;
  //     margin: -30px;
  //  }
 }
 .left-ct{
  //  background: linear-gradient(to bottom right, #665c55, #101010);
    position: relative;
    width: 330px;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    background-image: url('~@/assets/login/login-bg4.jpg');
    z-index: 1;
    &:before{
     content: '';
      position: absolute;
      top: 0; 
      right: 0; 
      bottom: 0; 
      left: 0; 
      z-index: -1;
      background: linear-gradient(to bottom right, #067fcd, #00427e);
      opacity:.8;
   }
   div{
     margin-top: 167px;
     margin-left: 30px;
   }

 }
 .right-ct{
   width: 430px;
  }
 .login-tie{
   padding-top: 65px;
   padding-left: 75px;
 }
  .ruleForm{
    padding: 0 75px;
    padding-top: 20px;
    .el-form-item{
      margin-bottom: 20px;
    }
  }
  .captcha{
    float: right;
    display: inline-block;
    background-color: #fff;
    width: 83px;
    margin-top: 4px;
    margin-left: 15px;
    height: 32px;
    border-radius: 3px;
    img{
      display: block;
      width: 100%;
      height: 100%;
    }
  }
 .bg-white{
   background-color: #fff;
 }
</style>
