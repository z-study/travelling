<template>
  <header>
    <div class="main">
      <img src="../../assets/images/logo.png" alt="logo">
      <el-menu class="menus" mode="horizontal" @select="handleSelect">
        <el-submenu index="0">
          <template slot="title">{{title}}</template>
          <el-menu-item v-for="(tab, index) in tabList" :key="index" :index="''+index">{{tab}}</el-menu-item>
        </el-submenu>
      </el-menu>
      <div class="top-right">
        <el-input
          class="top-search"
          size="small"
          placeholder=""
          icon="search"
          v-model="searchKey"
          :on-icon-click="handleIconClick">
        </el-input>
        <router-link to="/login">登录</router-link> |
        <router-link to="/register">注册</router-link> 
      </div>
    </div>
  </header>
</template>

<script>
  export default {
    data () {
      return {
        activeIndex: '1',
        title: '标题名称',
        tabList: ['选项1', 'whj'],
        searchKey: ''
      }
    },
    methods: {
      handleSelect (index) {
        this.title = this.tabList[index]
      },
      handleIconClick () {}
    }
  }
</script>

<style lang="less" scoped>
  header {
    height: 100px;
    line-height: 100px;
  }
  .main {
    width: 900px;
    height: 100%;
    margin: 0 auto;
    img {
      width: 160px;
      height: 50px;
      vertical-align: middle;
    }
  }
  .menus {
    display: inline-block;
    vertical-align: middle;
  }
  .top-right {
    float: right;
    font-size: 14px;
    color: #999999;
    a {
      color: #999999;
      &:nth-child(2) {
        margin-left: 20px;
      }
    }
  }
  .top-search {
    width: 200px;
  }
</style>
