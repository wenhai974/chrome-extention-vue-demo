<template>
<div class="login-cont">这里是登录页
  <a href="javascript:;" @click="backToIndex" class="back">点此返回</a>
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
</style>
