import { makeStyles } from "tss-react/mui";

export const feedStyle = makeStyles()((theme,styles)=>{
    return{
      container:{
        maxHeight:"100vh",
        overflow:"hidden"
      },
    }
})