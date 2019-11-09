<template>
  <div>
    <h1>index process</h1>
    <button @click="handlePush">打开home process</button>
    <button @click="handleClose">关闭home</button>
    <button @click="handleCloseSelf">关闭当前</button>
    <button @click="handleSend">发送消息</button>
    <br>
    <input type="text" v-model="message" placeholder="请输入消息内容">
    <p>{{result}}</p>
  </div>
</template>

<script>
import router from '../../router'
export default {
  data () {
    return {
      message: 'index的消息',
      result: ''
    }
  },
  computed: {
  },
  watch: {
  },
  created () {
  },
  mounted () {
  },
  methods: {
    handlePush () {
      router.push({name: 'home', config: {}, focus: false}).then(() => {
        this.result = '页面打开成功'
      })
    },
    handleClose () {
      router.close({name: 'home'})
    },
    handleCloseSelf () {
      router.close()
    },
    handleSend () {
      router.send({name: 'home'}, {message: this.message, time: +new Date()}).then((value) => {
        this.result = '消息已被home成功接收，并返回' + value
      })
    }
  },
  components: {
  }
}
</script>
