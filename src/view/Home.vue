<template>
  <div class="Page-Home-Container">
    <p>this is Home</p>
    <div class="area">
      <!-- <el-button @click="godetail('/Vuex')" type="primary">主要按钮</el-button>
      <el-button @click="godetail('/')" type="primary">主要按钮</el-button> -->
			<van-button @click="godetail('/Vuex')" style="margin-right:10px;" type="primary">vuex</van-button>
			<van-button @click="godetail('/')" type="primary">Home</van-button>
			<div style="margin-top:10px;">
				<van-checkbox shape="square" v-model="isCheck">复选框</van-checkbox>
			</div>
      <div style="margin-top:10px;">
        <div class="line">
          <van-field v-model="userName" placeholder="请输入姓名"/>
        </div>
        <div class="line">
          <van-field v-model="userAge" placeholder="请输入年龄"/>
        </div>
        <van-button @click="addItem()" type="primary">添加</van-button>
      </div>
    </div>
		<div class="PersonList">
			<div v-for="(item,index) in data.personList" :key="index">
				<div>姓名:{{item.name}}-年龄：{{item.age}}</div>
			</div>
		</div>
  </div>
</template>


<script lang="ts">
import { ref, defineComponent,reactive} from 'vue'
import { useRouter } from 'vue-router'
import {personData} from '../datas/Home/login';
import {ElMessage} from 'element-plus'
export default defineComponent({
  name: 'Home',
  props: {},
  setup: () => {
    const router = useRouter()
    const isCheck = ref(false)
    const userName = ref('')
    const userAge = ref('')
		const data = reactive({
			personList:Array<personData>(),
		})
    function godetail(str: string):void {
      router.push(str)
    }
    function getCheckValue(): boolean {
      return isCheck.value
    }
		function addItem(){
			console.log(data.personList.length);
			if(userName.value == ""){
				ElMessage.error('用户名不能为空');
				return false;
			}
			if(userAge.value == ""){
				ElMessage.error('年龄不能为空');
				return false;
			}
			let item : personData= {
				name:userName.value,
				age:userAge.value,
			}
			let flag:boolean = data.personList.some((it)=>{
				return it.name == item.name && it.age == item.age
			})
			if(flag){
				ElMessage.error('不能添加重复的数据');
				return;
			}
			data.personList.push(item);
		}
    return {
      godetail,
      isCheck,
      getCheckValue,
      userName,
      userAge,
			data,
			addItem
    }
  }
})
</script>
<style lang="less" scoped>
.Page-Home-Container {
  .line {
    margin-bottom: 10px;
  }
	.PersonList{
		margin-top:10px;
	}
}
</style>
