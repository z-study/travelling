<template>
  <div class="hello">
    <Navigation></Navigation>
    <pagination :cur="curPage" :all="allPage" v-on:change-page="changePage"></pagination>
    <ul class="list">
      <li v-for="(item, index) in items">item -- {{ index }}</li>
    </ul>
    <!-- <scroll :show="canLoad" v-on:loading="getMore"></scroll> -->
  </div>
</template>

<script>
import pagination from './Basic/vue-nav'
import scroll from './Basic/vue-scroll'
import Navigation from './Basic/Navigation'

export default {
  name: 'hello',
  data () {
    return {
      curPage: 1,
      allPage: 15,
      canLoad: true,
      items: [1, 2, 3, 4, 5]
    }
  },
  methods: {
    changePage (page) {
      this.curPage = page
      console.log(page)
    },
    getMore () {
      this.canLoad = false
      fetcher.get('static/load.json').then((data) => {
        this.canLoad = true
        this.items.push.apply(this.items, data.data)
      })
    }
  },
  components: {
    scroll,
    pagination,
    Navigation
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}

a {
  color: #42b983;
}

.list {
  width: 100%;
  text-align: center;
}

.list li {
  width: 100%;
  height: 300px;
  background: #facccc;
}
</style>
