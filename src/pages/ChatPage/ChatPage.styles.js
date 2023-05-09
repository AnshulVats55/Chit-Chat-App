import { makeStyles } from "tss-react/mui";


export const chatStyle = makeStyles()((theme,styles)=>{
    return{
      profilePageTopContStyles: {
        display:'flex',
        justifyContent:'center',
        alignItems:'center',
        width:'93%',
        height:"100vh",
        position:'absolute',
        top:'14vh',
        left:'7%',
        position:'fixed',
   
        '@media screen and (max-width: 900px)': {
            left:'0vw',
            width:'100%',
        },
      },

   container:{
    //  backgroundColor:"#f1f0fa",
    marginTop:"2rem",
    height:"100vh",
    width:"100%",
    marginRight:"1rem",
        // border:"2px solid red",
   
  },
  gridContainer:{
    backgroundColor:"",
    height:"100%",
    justifyContent:"space-around"

  }

    }
})