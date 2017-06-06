<template>
	<p v-show="!show">加载中…</p>
</template>

<script>
  export default {
    props: {
      show: Boolean
    },
    mounted () {
      this.bind()
    },
    beforeDestroy () {
      document.removeEventListener('scroll', this.addEvent)
    },
    methods: {
      bind () {
        document.addEventListener('scroll', this.addEvent)
      },
      addEvent () {
        let scrollTop = 0
        let clientHeight = 0
        let scrollHeight = 0
        if (document.documentElement && document.documentElement.scrollTop) {
          scrollTop = document.documentElement.scrollTop
        } else if (document.body) {
          scrollTop = document.body.scrollTop
        }
        if (document.body.clientHeight && document.documentElement.clientHeight) {
          clientHeight = (document.body.clientHeight < document.documentElement.clientHeight) ? document.body.clientHeight : document.documentElement.clientHeight
        } else {
          clientHeight = (document.body.clientHeight > document.documentElement.clientHeight) ? document.body.clientHeight : document.documentElement.clientHeight
        }
        scrollHeight = Math.max(document.body.scrollHeight, document.documentElement.scrollHeight)

        if (scrollTop + clientHeight >= scrollHeight && this.show) {
          this.$emit('loading')
        }
      }
    }
  }
</script>
