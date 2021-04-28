<template>
    <div>
        <p>this is Home</p>
        <div class="area">
            <button @click="godetail('/Vuex')">vuex</button>
            <button @click="godetail('/')">Home</button>
        </div>
    </div>
</template>


<script lang="ts">
import { ref, defineComponent} from 'vue';
import {useRouter} from "vue-router"
export default defineComponent({
  name: 'Home',
  props: {
   
  },
  setup: () => {
    const router = useRouter();
    function godetail(str:string):void{
        router.push(str);
    }
    return {
        godetail
    }
  }
})
</script>

<style scoped>
    button{
        margin-right:10px;
    }
</style>