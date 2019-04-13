<template>
  <v-app>
    <v-toolbar app>
      <v-toolbar-title class="headline text-uppercase">
        <span>Vuetify</span>
        <span class="font-weight-light">MATERIAL DESIGN</span>
      </v-toolbar-title>
    </v-toolbar>

    <v-content>
      <v-btn color="error" to="home">
        Home
      </v-btn>
      <v-btn color="primary" to="about">
        About
      </v-btn>
      <router-view />
    </v-content>
  </v-app>
</template>

<script>
export default {
  name: 'App',
  data () {
    return {
      data: ''
    }
  }
}
</script>
