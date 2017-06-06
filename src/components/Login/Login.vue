<template>
  <el-form :model="userForm" :rules="rules" ref="userForm" class="demo-ruleForm login-form">
    <Company></Company>
    <el-form-item prop="user">
      <el-input size="large" type="tel" v-model="userForm.user" placeholder="手机号"></el-input>
    </el-form-item>
    <el-form-item prop="pass">
      <el-input size="large" type="password" v-model="userForm.pass" placeholder="密码"></el-input>
    </el-form-item>
    <el-form-item>
      <el-button size="large" class="login-btn" type="primary" @click="submit('userForm')">登录</el-button>
    </el-form-item>
  </el-form>
</template>

<script>
  import Company from '../Company/Company'

  export default {
    data () {
      // let checkPass = (rule, value, callback) => {
      //   if (value && !/^(?!\d+$)(?![A-Za-z]+$)[a-zA-Z0-9]{6,20}$/.test(value)) {
      //     callback(new Error('请输入正确的密码'))
      //   }
      // }
      return {
        userForm: {
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
      Company
    }
  }
</script>

<style scoped>
  .login-form {
    width: 50%;
    margin: 20% auto 0;
  }
  .login-btn {
    width: 100%;
  }
</style>
