import zIndex from "@mui/material/styles/zIndex";
import { makeStyles } from "tss-react/mui";


export const feedStyle = makeStyles()((theme,styles)=>{
    return{

    container:{
      maxHeight:"100vh",
      overflow:"hidden"
    },

     box1:{
        position:"fixed",
        top:"0vh",
        height:"10vh",
        width:"100%",
        backgroundColor:"transparent",
       
    
     },
     box2:{
        position:"fixed",
        top:"10vh",
        bottom:0,
        height:"100vh",
        width:200,
        backgroundColor:"transparent",
       
     },

     box3:{
        position:"absolute",
        left:200,
        top:"10vh",
        backgroundColor:"transparent",
        maxHeight: '100%', 
        overflow: 'auto',
        zIndex:-1
     }
    }
})