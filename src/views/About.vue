<template>
  <div class="about">
      <button class="button block is-primary" @click="show =! show">Show</button>
      <transition name="fade">
        <b-notification :active.sync="show" type="is-success">
          <p>This is the notifrication </p>
        </b-notification>
      </transition>
      <transition name="slide">
        <b-notification :active.sync="show" type="is-success">
          <p>This is the notifrication </p>
        </b-notification>
      </transition>
      <div class="columns">
        <div class="column is-4 is-primary">
          <b-field label="Name" type="is-success">
            <b-input v-model="user.name" placeholder="Enter Your Name"></b-input>
          </b-field>
          <b-field label="Age" type="is-success">
            <b-input v-model="user.age" type="number" placeholder="Enter Your Age"></b-input>
          </b-field>
          <button class="button is-success" @click="submit">Submit</button>
          <button class="button is-primary" @click="fetchData">Data</button>
          <ul>
            <li v-bind:key="u" v-for="u in users">{{u.name}} - {{u.age}}</li>
          </ul>
        </div>
    </div>
  </div>
</template>
<script>
export default {
    data() {
      return {
        show:false,
          user: {
            name:'',
            age:0
        },
        users:[]
      }
    },
    methods:{
      submit() {
        this.$http.post('',this.user)
            .then(response => {
              console.log(response);
            }, error => {
              console.log(error);
            });
      },
      fetchData(){
        this.$http.get('')
        .then(response => {
          return response.json();
        })
        .then(data => {
          const resultArray =[];
          for(let key in data){
            resultArray.push(data[key]);
          }
          this.users=resultArray;
        })
      }
    }
}
</script>
<style>
.fade-enter {
opacity:0;
}
.fade-enter-active {
transition: opacity 1s;
}
.fade-leave {
opacity: 0;
}
.fade-leave-active {
transition: opacity 1s;
opacity:0;
}
.slide-enter{

}
.slide-enter-active{
animation: slide-in 1s ease-out forwards;
}
.slide-leave{

}
.slide-leave-active{
animation: slide-out 1s ease-out forwards;
}
@keyframes slide-in{
from{
transform:translateY(20px);
}
to{
transform: translate(0px);
}
}
@keyframes slide-out{
from{
transform: translate(0);
}
to{
transform: translate(20px);
}
}
</style>


