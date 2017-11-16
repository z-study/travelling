<template>
  <div>
    <HeadBar></HeadBar>
    <div class="login-banner"> 
      <div class="login-center">
      <div class="login-form-bg"></div>
        <div class="login-form">
          <template>
            <el-tabs v-model="activeName" @tab-click="handleClick">
              <el-tab-pane label="扫码登录" name="first">
                <div class="login_erweima">
                  <img src="../../assets/images/erweima.png" height="149" width="150" />
                </div>
              </el-tab-pane>
              <el-tab-pane label="帐号登录" name="second">
                <div class="login_number">
                  <el-form :model="userForm" :rules="rules" ref="userForm" class="register-form">
                    <el-form-item prop="user" >
                      <el-input  class="login-input" type="text" v-model="userForm.user" placeholder="邮箱/用户名/手机">
                        <template slot="prepend"><span class="input-icon icon1"></span></template>
                      </el-input>
                    </el-form-item>
                    <el-form-item prop="pass" >
                      <el-input  class="login-input" type="password" v-model="userForm.pass" placeholder="密码">
                        <template slot="prepend"><span class="input-icon icon2"></span></template>
                      </el-input>
                    </el-form-item>
                    <el-form-item>
                      <el-button  class="submit" type="primary" @click="submit('userForm')">立即登录</el-button>
                    </el-form-item>
                  </el-form>
                  <a href="#" class="forget-mm">忘记密码</a>
                </div>
              </el-tab-pane>
            </el-tabs>
          </template>
          <div class="login-footer">
            <a href="#">立即注册</a>
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
      return {
        userForm: {
          input: '',
          user: '',
          pass: ''
        },
        rules: {
          user: [
            { required: true, message: '请先输入邮箱/用户名/手机号', trigger: 'blur' },
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
  body{
    position:relative;
  }
  .login-banner{
    width:100%; 
    background:#ddd url(../../assets/images/timg.png) no-repeat ; 
    height:475px;  
    background-size: 100% 100%;
  }
  .login-center{
    width:990px; 
    margin:0 auto; 
    position:relative;
  }
  .login-form-bg{
    background:#fff;
    position:relative; 
    right:0; 
  }
  .login-form-bg,.login-form{
    width:347px; 
    height:359px;
    float:right; 
    margin-top:40px; 
  }
  .login-form{
    position:absolute;
    right:0;
  }
  .login_number{
    padding:20px 23px 10px 23px;
  }
  .submit{
    width:100%;
  }
  .input-icon{
    display:block; 
    width:18px; 
    height:18px; 
    background:url(../../assets/images/pwd-icons-new.png) no-repeat;
  }
  .icon1{
    background-position:-10px -9px;
  }
  .icon2{
    background-position:-58px -9px;
  }
  .forget-mm{
    color:#666; 
    float:right; 
    font-size: 12px;
  }
  .forget-mm:hover{
    color:#ff0000;
  }
  .login-footer{
    line-height:36px; 
    background:#eee; 
    margin-top:57px; 
    font-size:12px;
    position:absolute;
    bottom:0;
    width:100%;
    border:1px solid #ddd;
    text-align:right;
    padding:0 20px;
  }
  .login-footer a{
    color:#ff0000;
  }
  .login_erweima{
    width:150px; 
    height:150px;
    border:1px solid #ddd;
    margin:30px auto;
  }
</style>
