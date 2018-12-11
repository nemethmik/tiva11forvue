<template>
  <div class="home">
    <!-- h1 class="display-4 font-weight-bold">Home</h1>
    <p class="red white--text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ullam molestiae qui mollitia saepe aut, esse ratione. Sequi nam odit explicabo porro nostrum? Blanditiis eum doloremque delectus optio reiciendis minima molestias?</p>
    <p class="pink lighten-4 red--text text--darken-4">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolores magni ullam architecto, consectetur recusandae mollitia. Repellendus expedita, tempora nam facilis voluptate esse, numquam magni qui cum maxime omnis dolore voluptates?</p -->
    <v-btn class="pink white--text">Click Me</v-btn>
    <v-btn flat color="pink">Click Me</v-btn>
    <v-btn depressed dark class="hidden-sm-and-down" color="pink"><v-icon left>email</v-icon>Email Me</v-btn>
    <v-btn fab dark small class="hidden-xs-and-down" color="pink"><v-icon dark>favorite</v-icon></v-btn>


  </div>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'home',
});
</script>
