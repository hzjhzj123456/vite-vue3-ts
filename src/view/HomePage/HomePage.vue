<template>
	<div class="page-HomePage-container">
		<swiper :list="swiperList"></swiper>
		<div class="grid-area">
			<van-grid :column-num="5">
				<van-grid-item v-for="item in gridList" :key="item" :icon="item.imgUrl" :text="item.name" />
			</van-grid>
		</div>
		<div class="productBox">
			<div class="produce-title">新品上市</div>
			<van-grid :column-num="2">

			</van-grid>
		</div>
	</div>
</template>

<script lang="ts">
import Vue, { defineComponent,reactive,toRefs} from 'vue'
import swiper from "@/components/swiper/MySwiper.vue"
export default defineComponent({
	name:"HomePage",
	props:{

	},
	components:{
		swiper
	},
	setup:()=>{
		const state = reactive({
			swiperList :[{
				id:1,
				name:"图片1",
				url:"https://newbee-mall.oss-cn-beijing.aliyuncs.com/images/banner1.png"
			},
			{
				id:1,
				name:"图片1",
				url:"https://newbee-mall.oss-cn-beijing.aliyuncs.com/images/banner1.png"
			},
			{
				id:1,
				name:"图片1",
				url:"https://newbee-mall.oss-cn-beijing.aliyuncs.com/images/banner1.png"
			},
			{
				id:1,
				name:"图片1",
				url:"https://newbee-mall.oss-cn-beijing.aliyuncs.com/images/banner1.png"
			}],
			gridList:[{
          name: '新蜂超市',
          imgUrl: 'https://s.yezgea02.com/1604041127880/%E8%B6%85%E5%B8%82%402x.png',
          categoryId: 100001
        }, {
          name: '新蜂服饰',
          imgUrl: 'https://s.yezgea02.com/1604041127880/%E6%9C%8D%E9%A5%B0%402x.png',
          categoryId: 100003
        }, {
          name: '全球购',
          imgUrl: 'https://s.yezgea02.com/1604041127880/%E5%85%A8%E7%90%83%E8%B4%AD%402x.png',
          categoryId: 100002
        }, {
          name: '新蜂生鲜',
          imgUrl: 'https://s.yezgea02.com/1604041127880/%E7%94%9F%E9%B2%9C%402x.png',
          categoryId: 100004
        }, {
          name: '新蜂到家',
          imgUrl: 'https://s.yezgea02.com/1604041127880/%E5%88%B0%E5%AE%B6%402x.png',
          categoryId: 100005
        }, {
          name: '充值缴费',
          imgUrl: 'https://s.yezgea02.com/1604041127880/%E5%85%85%E5%80%BC%402x.png',
          categoryId: 100006
        }, {
          name: '9.9元拼',
          imgUrl: 'https://s.yezgea02.com/1604041127880/9.9%402x.png',
          categoryId: 100007
        }, {
          name: '领劵',
          imgUrl: 'https://s.yezgea02.com/1604041127880/%E9%A2%86%E5%88%B8%402x.png',
          categoryId: 100008
        }, {
          name: '省钱',
          imgUrl: 'https://s.yezgea02.com/1604041127880/%E7%9C%81%E9%92%B1%402x.png',
          categoryId: 100009
        }, {
          name: '全部',
          imgUrl: 'https://s.yezgea02.com/1604041127880/%E5%85%A8%E9%83%A8%402x.png',
          categoryId: 100010
        }]
		})
		return {
			...toRefs(state)
		}
	}
})
</script>

<style lang="less" scoped>
	.page-HomePage-container{
		.produce-title{
			height:50px;
			line-height:50px;
			text-align:center;
			background:#f9f9f9;
			color:#1baeae;
			font-weight:500;
			font-size:16px;
		}
	}
</style>
