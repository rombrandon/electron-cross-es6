<template>
  <div>
    <h1>home process</h1>
    <button @click="handleOn">监听消息</button>
    <button @click="handleOff">解绑消息</button>
    <p>{{message}}</p>
  </div>
</template>

<script>
import router from '../../router'
export default {
  data () {
    return {
      message: '...',
      listener: null
    }
  },
  computed: {
  },
  watch: {
  },
  created () {
    this.handleOn()
  },
  beforeDestroy () {
    this.handleOff()
  },
  mounted () {
  },
  methods: {
    handleOn () {
      if (this.listener) return false
      this.listener = router.on((message) => {
        this.message = JSON.stringify(message)
        return '[ok' + +new Date() + ']'
      })
    },
    handleOff () {
      router.off(this.listener)
      this.listener = null
    }
  },
  components: {
  }
}
</script>
