<template>
	<div class="page-pageList-container">
		<van-list>
				<van-cell @click="goToDetail(item)" v-for="item in pageList" :key="item" :title="item.name"/>
			</van-list>
	</div>
</template>

<script lang="ts">
import {defineComponent,reactive,toRefs} from "vue";
import {useRouter} from "vue-router"
export default defineComponent({
	name:"pageList",
	props:{

	},
	setup:()=>{
		const router = useRouter();
		const state = reactive({
			pageList:[
				{
					name:"首页",
					url:"/HomePage",
				}
			]
		});
		const goToDetail = (item:any) =>{
			console.log(1234,item.url);
			router.push(item.url);
		}
		return {
			...toRefs(state),
			goToDetail
		}
	}
})
</script>

<style lang="less" scoped>

</style>
