import axios from 'axios';

const postApi = ()=>{
    
   
   const createPost = async(data)=>{
         const URL = 'http://192.168.1.34:8484/v1/post'
         const config={
            header:{
                'Content-Type': 'application/json'
            }
         }
         const result = axios.post(URL,data )

    }
    

    return {createPost}
}


export default postApi