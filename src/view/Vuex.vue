<template>
    <div>
        <p>this is vuex</p>
        <button @click="godetail('/Vuex')">vuex</button>
        <button @click="godetail('/')">Home</button>
    </div>
</template>


<script lang="ts">
import { ref, defineComponent} from 'vue';
import {useRouter} from "vue-router"
export default defineComponent({
  name: 'vuex',
  props: {
   
  },
  setup: () => {
    const router = useRouter();
    function godetail(str:string){
        router.push(str);
    }
    return{
        godetail
    }
  }
})
</script>

<style scoped>
    button{
        margin-right: 10px;
    }
</style>