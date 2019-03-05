<template>
<div class="reg-cont">这里是注册页
  <div @click="backToIndex" class="back">点此返回</div>
</div>
</template>

<script>
export default {
  name: 'reg',
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
         name: 'index'
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
