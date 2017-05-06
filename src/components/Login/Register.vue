<template>
  <div>
    <HeadBar></HeadBar>
    <div class="register">
      <el-form :model="userForm" :rules="rules" ref="userForm" class="register-form">
        <el-form-item prop="user">
          <el-input size="large" type="text" v-model="userForm.user" placeholder="您的账户名和登录名">
            <template slot="prepend"><span class="special-prepend">用 户 名</span></template>
          </el-input>
        </el-form-item>
        <el-form-item prop="pass">
          <el-input size="large" type="password" v-model="userForm.pass" placeholder="建议至少使用两种字符组合">
            <template slot="prepend">设置密码</template>
          </el-input>
        </el-form-item>
        <el-form-item prop="pass">
          <el-input size="large" type="password" v-model="userForm.passRepeat" placeholder="请再次输入密码">
            <template slot="prepend">确认密码</template>
          </el-input>
        </el-form-item>
        <el-form-item prop="captcha">
          <el-input size="large" type="tel" v-model="userForm.captcha" placeholder="请输入验证码">
            <template slot="prepend"><span class="special-prepend">验 证 码</span></template>
            <template slot="append"><img class="imgCode" :src="imgCode" alt="imgCode"></template>
          </el-input>
        </el-form-item>
        <el-form-item>
          <el-button size="large" class="submit" type="primary" @click="submit('userForm')">立即注册</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
  import HeadBar from './HeadBar'

  export default {
    data () {
      return {
        userForm: {
          user: '',
          pass: '',
          passRepeat: '',
          captcha: ''
        },
        imgCode: 'static/images/logo.png',
        rules: {
          user: [
            { required: true, message: '请先输入用户名', trigger: 'blur' },
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
          ],
          captcha: [
            { required: true, message: '请先输入验证码', trigger: 'blur' },
            {
              pattern: /^[0-9a-zA-Z]$/,
              message: '请输入正确的验证码',
              trigger: 'blur'
            }
          ]
        }
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
  .register {
    width: 830px;
    margin: 50px auto 60px;
  }
  .register-form {
    width: 400px;
  }
  .el-form-item {
    margin-bottom: 30px;
  }
  .special-prepend {
    word-spacing: 4px;
    border-radius: 0;
  }
  .imgCode {
    width: 110px;
    height: 34px;
  }
  .submit {
    width: 100%;
  }
</style>
