<template>
    <div>
        <div class="columns">
        <div class="column is-4">
        <p>value comes from parent:-   {{count}}</p>
        <button class="button is-success" @click="starss">Button</button>
        </div>
        </div>
    </div>
</template>
<script>
export default {
    props:['count'],
    methods:{
        starss:function(){
            for(var i=0;i<=this.count;i++){
                for(var j=0;j<=i;j++)
                {
                  document.write('*');
                }
                document.write('<br>');
            }
        }
    }

}
</script>

