<template>
  <div>
    <HeadBar></HeadBar> 
  <div class="box">
      <div class="w">
        <div class="login_box">
          <div class="hide_box"></div>
           <el-tabs v-model="activeName" @tab-click="handleClick">
            <el-tab-pane label="账号登陆" name="first" class="top_tab">
              <div class="msg_error"><b></b>请输入密码</div>
               <div >
                <el-input placeholder="邮箱/用户名/已验证手机" v-model="input3">
                  <template slot="prepend"><div class="login_label login_icon1"></div></template>
                </el-input>
              </div> 
              <div class="login_icon2">
                <el-input placeholder="密码" v-model="input3">
                  <template slot="prepend"><div class="login_label name_labe2"></div></template>
                </el-input>
              </div> 
               <span class="wrapper">
                <el-button type="danger" class="login_btn">登陆</el-button>
              </span>
              <a href="#" class="forget_mm">忘记密码</a>
            </el-tab-pane>
            <el-tab-pane label="二维码登录" name="second">
              <div class="erweima"><img src="../../assets/images/erweima.png" height="149" width="150" /></div>
            </el-tab-pane>
          </el-tabs> 
          <div class="reg_block">
            <div>
              <span class="zc_icon"></span>
              <a href="#">立即注册</a>
            </div>
          </div>
        </div>
      </div>
    </div> 
  </div>
</template>
<script>
  import HeadBar from './HeadBar'
  export default {
    data () {
      // let checkPass = (rule, value, callback) => {
      //   if (value && !/^(?!\d+$)(?![A-Za-z]+$)[a-zA-Z0-9]{6,20}$/.test(value)) {
      //     callback(new Error('请输入正确的密码'))
      //   }
      // }
      return {
        userForm: {
          input: '',
          user: '',
          pass: ''
        },
        rules: {
          user: [
            { required: true, message: '请先输入手机号', trigger: 'blur' },
            {
              pattern: /^0?(13[0-9]|15[012356789]|17[0135678]|18[0-9]|14[57])[0-9]{8}$/,
              message: '请输入正确的手机号',
              trigger: 'blur'
            }
          ],
          pass: [
            { required: true, message: '请先输入密码', trigger: 'blur' },
            {
              pattern: /^(?!\d+$)(?![A-Za-z]+$)[a-zA-Z0-9]{6,20}$/,
              message: '请输入正确的密码',
              trigger: 'blur'
            }
          ]
        },
        activeName: 'second'
      }
    },
    methods: {
      submit (formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            alert('success!')
          } else {
            return false
          }
        })
      }     
    },
    components: {
      HeadBar
    }
  }
</script>

<style scoped>
  body{position:relative;}
  .box{background:url(../../assets/images/timg.png) no-repeat; width:100%; height:100%; background-size:100% 100%; position:absolute;}
  .w{width:990px; 
    margin:0 auto;
  }
  .login-form {
    width: 50%;
    margin: 20% auto 0;
  }
  .login-btn {
    width: 100%;
  }
  .login_box{
    width:348px;
    height:359px;
    position:relative;
    float:right;
    margin-top:40px;
  }
  .hide_box{
    width:100%;
    height:100%;
    background:#fff;
    opacity:0.8;
    top:0;
    position:absolute;
  }
 .top_tab{
  padding:0 30px;
 }
 .msg_error{
  display:block;
  width:100%;
  height:auto;
  color:#e4393c;
  border:1px solid #faccc6;
  font-size:12px;
  margin-bottom: 5px;
  background:#ffebeb;
  padding:0 30px;
  position:relative;
  line-height: 20px;
 }
 .msg_error b{
  position:absolute;
  width:16px;
  height:16px;
  background:url(../../assets/images/pwd-icons-new.png) no-repeat -104px -49px;
  left:8px;
  top:2px;
 }
 .login_label{
  background:red;
  width:34px;
  height:34px;
  display:block;
  background:url(../../assets/images/pwd-icons-new.png) no-repeat;
  
 }
 .login_icon2{margin-top:20px;}
 .name_labe2{background-position:-48px 0;}
 .login_btn{width:289px; height:36; margin-top:20px;}
 .forget_mm{color:#666; float:right; font-size:12px; margin-top:5px; display:block;}
 .reg_block{width:100%; height:auto; background:#fcfcfc; border:1px solid #f4f4f4; position:absolute; bottom:0; left:0; padding:2px 5px;}
 .reg_block a{color:#b61d1d; font-size:12px; }
 .zc_icon{width:16px; height:16px; display:block; background:url(../../assets/images/pwd-icons-new.png) no-repeat;}
 .erweima{width:160px; height:160px; border:1px solid #ddd; margin:20px auto; padding:5px;}
</style>
