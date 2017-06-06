<template>
  <div>
    <p @click="test">{{ name }}</p>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        name: 'ziyoujiayuan'
      }
    },
    mounted () {
      this.init()
    },
    methods: {
      test () {
        console.log(this.name)
        this.init()
      },
      init () {
        console.log(1)
      }
    }
  }
</script>

<style scoped lang="css"></style>
