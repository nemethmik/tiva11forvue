<template>
  <nav>
    <v-toolbar flat app>
      <v-toolbar-side-icon class="grey--text" @click="drawer = !drawer" ></v-toolbar-side-icon>
      <v-toolbar-title class="text-uppercase grey--text">
        <span class="font-weight-light">Todo</span>
        <span>Actions</span> 
        </v-toolbar-title>
        <v-spacer/>
        <v-btn flat color="grey">Sign Out<v-icon right>exit_to_app</v-icon></v-btn> 
    </v-toolbar>
    <v-navigation-drawer v-model="drawer" app class="indigo">
      <v-list>
        <v-list-tile v-for="l in links" :key="l.text" route :to="l.route">
          <v-list-tile-action><v-icon class="white--text">{{l.icon}}</v-icon></v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title class="white--text">{{l.text}}</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
  </nav>  
</template>
<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  data() {
    return {
      drawer: false,
      links:[
        {icon:"dashboard", text:"Dashboard", route:"/"},
        {icon:"folder", text:"My Project", route:"/projects"},
        {icon:"person", text:"Team", route:"/team"},
      ]
    }
  }
  
})
</script>
