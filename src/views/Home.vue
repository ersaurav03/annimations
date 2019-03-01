<template>
  <div class="home">
    <div class="columns">
      <div class="column is-4">
       <h1 class="has-background-primary">Part 1</h1>
        <b-field label="Name">
            <b-input v-model="name"></b-input>
        </b-field>
      </div>
      <div class="column is-4">
        <h1 class="has-background-danger">Part 2</h1>
        <b-field label="Stars">
            <b-input type="number" v-model="count"></b-input>
        </b-field>
      </div>
      <div class="column is-4">
        <h1 class="has-background-success">Part 3</h1>
      </div>
    </div>
    <div class="columns">
      <div class="column is-6">
        <names :name="name"></names>
      </div>
      <div class="column is-6">
          <stars :count="count"></stars>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src

import stars from '../components/stars.vue'
import names from '../components/names.vue'

export default {
  name: 'home',
  components: {
    names,
    stars
  },
  data(){
    return {
       name:'',
       count:0
    }
  }
}
</script>
