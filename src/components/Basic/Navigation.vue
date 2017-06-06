<template>
  <header>
    <div class="main">
      <img src="../../assets/images/logo.png" alt="logo">
      <el-menu :default-active="activeIndex" class="menus" mode="horizontal" @select="handleSelect">
        <el-submenu index="0">
          <template slot="title">{{title}}</template>
          <el-menu-item v-for="(tab, index) in tabList" :key="index" :index="''+index">{{tab}}</el-menu-item>
        </el-submenu>
      </el-menu>
    </div>
  </header>
</template>

<script>
  export default {
    data () {
      return {
        activeIndex: '1',
        title: '标题名称',
        tabList: ['选项1', 'whj']
      }
    },
    methods: {
      handleSelect (index) {
        this.title = this.tabList[index]
      }
    }
  }
</script>

<style lang="less" scoped>
  header {
    height: 100px;
    line-height: 100px;
  }
  .main {
    width: 1210px;
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
</style>
