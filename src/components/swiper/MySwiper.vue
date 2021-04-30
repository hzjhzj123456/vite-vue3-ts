<template>
  <div class="component-swiper-container">
    <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
      <van-swipe-item v-for="(item,index) in swiperList" :key="index">
				<img v-if="item.url" :src="item.url" alt="">
			</van-swipe-item>
    </van-swipe>
  </div>
</template>

<script lang="ts">
import Vue, { defineComponent,reactive,toRefs} from 'vue'
import {swiperData} from "./swiperData"
export default defineComponent({
  name: 'swiper',
  props: {
		list:Array,
	},
  setup: (props) => {
		const state = reactive({
			swiperList:Array<swiperData>()
		});
		const {list} = toRefs(props);
		state.swiperList = list as unknown as Array<swiperData>;
		return{
			...toRefs(state)
		}

	}
})
</script>

<style lang="less">
.component-swiper-container {
  .my-swipe{
		img{
			width:100%;
			height:100%;
		}
  }
}
</style>
