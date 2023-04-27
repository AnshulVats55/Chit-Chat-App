import { makeStyles } from "tss-react/mui";


export const chatStyle = makeStyles()((theme,styles)=>{
    return{

   container:{
    backgroundColor:"#f1f0fa",
    marginTop:"2rem",
    height:"100vh",
    width:"100%"
   
  },
  gridContainer:{
    backgroundColor:"",
    height:"100%",
    justifyContent:"space-around"

  }

    }
})