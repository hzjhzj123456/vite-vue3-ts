import Axios from "axios";
import {ElMessage} from "element-plus";
 const baseUrl = "https://api.github.com"

 const axios = Axios.create({
     baseURL,
     timeout:20000,
 })
//前置拦截器拦截
 axios.interceptors.request.use(
     (Response) =>{
         return Response
     },
     (error)=>{
         return Promise.reject(error);
     }
 )

 axios.interceptors.response.use(
     (Response)=>{
         return Response;
     },
     (error)=>{
        if(error.response && error.response.data){
            const code = error.response.status;
            const msg = error.response.data.message;
            ElMessage.error(`code:${code},Message:${msg}`)
        }
     }
 )