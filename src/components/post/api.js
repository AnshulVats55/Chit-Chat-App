import axios from 'axios';

const api =()=>{
    // const getPosts = async()=>{


    // }
    const createPost = async()=>{

        const {data} = await axios.post('http://192.168.1.34:8484/v1/post',{
            
       })
    
    }





    return ({createPost});

}


export default api;
