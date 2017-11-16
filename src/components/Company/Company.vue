<template>
  <div class="compile-box">
  <HeadBar></HeadBar>
    <el-row>
      <el-col :span="24"><div class="grid-content bg-purple-dark">
        <label class="title">package</label>
        <el-input v-model="input" placeholder="请输入内容" class="txt_input"></el-input>
      </div></el-col>
    </el-row>
    <el-row>
      <el-col :span="24"><div class="grid-content bg-purple-dark">
        <label class="title">import</label>
        <el-input v-model="input" placeholder="请输入内容" class="txt_input"></el-input>
      </div></el-col>
    </el-row>
  </div>
</template>
<script>
   export default {
   }
</script>

<style scoped lang="css">
  .compile-box{
    width:800px;
    margin:0 auto;
  }
  .title{
    float:left;
    line-height: 35px;
    width:20%;
  }
  .txt_input{
    float:right;
    width:80%;
  }  
</style>
