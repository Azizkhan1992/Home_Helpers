<template>
  <div id="app">
      <router-view/>
  </div>
</template>

<script>

export default {
  name: 'App',
  components: {
  },
  computed: {
    // layout(){
    //   return (this.$route.meta.layout || 'additional') + '-layout'
    // }
  },
}
</script>

<style>

</style>
