<template>
 <div>
    <div class="columns">
    <div class="column is-4">
     <h1>names Component:-   {{name}}</h1>
     <button class="button is-primary" @click="revname">Button</button>
    </div>
    </div>
 </div>
</template>
<script>
export default {
    props:['name'],
        methods:{
        revname:function(){
            this.name = this.name.split('').reverse().join('')
        }
    }
}
</script>

