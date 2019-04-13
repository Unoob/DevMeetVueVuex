<template>
  <v-container grid-list-sm
    >Vote {{ text }}
    <BaseButton :loading="loading" @click="vote">Ny</BaseButton>
    <BaseInput v-model="value" label="Pierwszy"></BaseInput>
    <BaseInput v-model.trim="value" solo></BaseInput>
    {{ value }}
    <VoteOptions :items="items">
      <template v-slot:item="{ tmp }">
        <v-list-tile-title>{{ tmp.text }}</v-list-tile-title>
        <v-list-tile-sub-title>{{ tmp.desc }}</v-list-tile-sub-title>
      </template>
    </VoteOptions>
  </v-container>
</template>
<script>
import VoteOptions from '../components/VoteOptions';
export default {
  name: 'Vote',
  components: { VoteOptions },
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
    return {
      text: 0,
      loading: false,
      value: '',
      items: [
        {
          text: 'raz',
          desc: 'subRaz'
        },
        {
          text: 'dwa',
          desc: 'subDwa'
        }
      ]
    }
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
