<template>
  <v-app>
    <v-toolbar app>
      <v-toolbar-title class="headline text-uppercase">
        <span>Vuetify</span>
        <span class="font-weight-light">DevMeetup</span>
      </v-toolbar-title>
    </v-toolbar>
    <v-navigation-drawer app permanent>
      <v-toolbar flat>
        <v-list>
          <v-list-tile>
            <v-list-tile-title class="title">
              Menu
            </v-list-tile-title>
          </v-list-tile>
        </v-list>
      </v-toolbar>

      <v-divider></v-divider>

      <v-list dense class="pt-0">
        <v-list-tile
          v-for="(item, i) in items"
          :key="i"
          :to="{ name: item.name }"
          exact
        >
          <v-list-tile-action>
            <v-icon>{{ item.name }}</v-icon>
          </v-list-tile-action>

          <v-list-tile-content>
            <v-list-tile-title>
              {{ item.name }}
            </v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
    <v-content>
      <router-view />
    </v-content>
  </v-app>
</template>

<script>
export default {
  name: 'App',
  mounted () {
    this.items = this.$router.options.routes
  },
  data () {
    return {
      data: '',
      items: []
    }
  }
}
</script>
