<template>
<div class="login-cont">这里是登录页
  <div @click="backToIndex" class="back">点此返回</div>
</div>
</template>

<script>
export default {
  name: 'login',
  components: {},
  data () {
    return {}
  },
  mounted () {},
  created () {},
  computed: {},
  methods: {
    backToIndex () {
      this.$router.push({
        path: '/'
      })
    }
  }
}
</script>

<style scoped lang="scss">
  .back{
    cursor: pointer;
    color: #42B983;
  }
</style>
