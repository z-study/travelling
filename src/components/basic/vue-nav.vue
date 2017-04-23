<template lang="html">
  <div class="page-bar">
    <ul>
      <li v-if="page!=1"><a v-on:click="btnClick(page, --page)">上一页</a></li>
      <li v-show="indexs[0]>1"><a>…</a></li>
      <li v-for="index in indexs"  v-bind:class="{ active: page == index}">
        <a v-on:click="btnClick(page, index)">{{ index }}</a>
      </li>
      <li v-show="all>indexs[indexs.length-1]"><a>…</a></li>
      <li v-if="page!=all"><a v-on:click="btnClick(page, ++page)">下一页</a></li>
      <li><a>共<i>{{ all }}</i>页</a></li>
      <li>
        到第<input class="search-page" type="number" v-model="gotoPage">页
        <button class="btn" type="button" @click="btnClick(page, Number(gotoPage))">确定</button>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: ['cur', 'all'],
  data () {
    return {
      page: this.cur, // 当前页数
      gotoPage: '' // 跳到第几页
    }
  },
  computed: {
    indexs: function () {
      var left = 1
      var right = this.all
      var ar = []
      if (this.all >= 6) {
        if (this.page > 3 && this.page < this.all - 2) {
          left = this.page - 2
          right = this.page + 2
        } else {
          if (this.page <= 3) {
            left = 1
            right = 5
          } else {
            right = this.all
            left = this.all - 4
          }
        }
      }
      while (left <= right) {
        ar.push(left)
        left++
      }
      return ar
    }
  },
  methods: {
    btnClick (page, data) {
      if (data && data !== page) {
        this.page = data
        this.$emit('change-page', data)
      }
    }
  },
  watch: {
    cur (val) {
      this.page = val
    }
  }
}
</script>

<style lang="css" scoped>
ul,li {
  margin: 0px;
  padding: 0px;
}

.page-bar {
  text-align: center;
}

.page-bar ul {
  display: inline-block;
}
.page-bar li {
  list-style: none;
  display: inline-block;
  vertical-align: middle;
}

.page-bar li:first-child>a {
  margin-left: 0px
}

.page-bar a {
  border: 1px solid #ddd;
  text-decoration: none;
  position: relative;
  float: left;
  padding: 6px 12px;
  margin-left: -1px;
  line-height: 1.42857143;
  color: #337ab7;
  cursor: pointer
}

.page-bar a:hover {
    background-color: #eee;
}

.page-bar .active a {
  color: #fff;
  cursor: default;
  background-color: #337ab7;
  border-color: #337ab7;
}

.page-bar i {
  font-style:normal;
  color: #d44950;
  margin: 0px 4px;
  font-size: 12px;
}

.page-bar .search-condition {
  width: 65px;
  min-width: 50px;
}

.btn {
  padding: 6px 12px;
  font-size: 14px;
  font-weight: 400;
  line-height: 1.42857143;
  text-align: center;
  -ms-touch-action: manipulation;
  touch-action: manipulation;
  cursor: pointer;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  border: 1px solid #2e6da4;
  border-radius: 4px;
  color: #fff;
  background-color: #337ab7;
}

.search-page {
  box-sizing: border-box;
  width: 70px;
  height: 34px;
  padding: 6px 12px!important;
  font-size: 14px;
  line-height: 1.42857143;
  color: #555;
  background-color: #fff;
  background-image: none;
  border: 1px solid #ccc;
  border-radius: 4px;
  -webkit-box-shadow: inset 0 1px 1px rgba(0,0,0,.075);
  box-shadow: inset 0 1px 1px rgba(0,0,0,.075);
  -webkit-transition: border-color ease-in-out .15s,-webkit-box-shadow ease-in-out .15s;
  -o-transition: border-color ease-in-out .15s,box-shadow ease-in-out .15s;
  transition: border-color ease-in-out .15s,box-shadow ease-in-out .15s;
}

.search-page:focus {
  border-color: #66afe9;
  outline: 0;
  -webkit-box-shadow: inset 0 1px 1px rgba(0,0,0,.075), 0 0 8px rgba(102,175,233,.6);
  box-shadow: inset 0 1px 1px rgba(0,0,0,.075), 0 0 8px rgba(102,175,233,.6);
}
</style>
