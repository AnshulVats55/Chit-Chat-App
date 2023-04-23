import { makeStyles } from "tss-react/mui";


export const sidebarStyle = makeStyles()((theme,styles)=>{
    return{
      sidebarLabel:{
        display:"flex",
        justifyContent:"center",
        alignItems:"center"
        
      }
    }
})