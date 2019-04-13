<template>
  <v-container grid-list-sm
    >Vote {{ text }}
    <Button :loading="loading" @click="vote"></Button>
  </v-container>
</template>
<script>
export default {
  name: 'Vote',
  beforeRouteEnter (to, from, next) {
    // Promise((res, x) => {
    //   setTimeout(() => {
    //     res('text')
    //   }, 5000)
    // }).then(r => {
    //   next(vm => {
    //     vm.text = r
    //   })
    // })
    next()
  },
  data () {
    return { text: 0, loading: false }
  },
  methods: {
    vote () {
      console.log('vote')
      this.text++
      this.loading = true
      setTimeout(() => {
        this.loading = false
      }, 3000)
    }
  }
}
</script>
