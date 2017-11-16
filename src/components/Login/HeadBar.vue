<template>
  <header>
    <div class="header">
      <img src="../../assets/images/logo.png" alt="logo">
      <span>欢迎注册</span>
      <p class="registed">已有账号？<router-link to="/login">去登陆</router-link></p>
    </div>
  </header>
</template>

<script></script>

<style lang="less" scoped>
  header {
    width: 100%;
    height: 100px;
    box-shadow: 0px 4px 10px #eee;
  }
  .header {
    width: 1210px;
    margin: 0 auto;
    

    padding-top: 24px;
    img {
      width: 160px;
      height: 50px;
      vertical-align: middle;
    }
    span {
      font-size: 20px;
      padding-left: 10px;
      vertical-align: middle;
    }
  }
  .registed {
    font-size: 15px;
    float: right;
    margin-top: 35px;
    color: #999;
    a {
      color: #333;
    }
  }
</style>
