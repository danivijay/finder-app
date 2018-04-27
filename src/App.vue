<template>
  <v-app>
    <v-toolbar
      app
    >
      <router-link to="/" tag="v-toolbar-title" style="cursor: pointer;">{{ title }}</router-link>
      <v-spacer></v-spacer>
      <v-btn to="/login"
        icon>
        <v-icon>lock_open</v-icon>
      </v-btn>
    </v-toolbar>
    <v-content>
      <router-view/>
    </v-content>
    <v-footer app>
      <span>&copy; 2018</span>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  data () {
    return {
      title: 'Missing Person Verifier'
    }
  },
  name: 'App'
}
</script>
