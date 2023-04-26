import { makeStyles } from "tss-react/mui";


export const chatStyle = makeStyles()((theme,styles)=>{
    return{

        mainContainer:{
            maxHeight:"100vh",
            overflow:"hidden"
          },

        navContainer:{
            position:"fixed",
            top:"0vh",
            height:"10vh",
            width:"100%",
            backgroundColor:"red",
           
        
         },
        sideContainer:{
            position:"fixed",
            top:"10vh",
            bottom:0,
            height:"100vh",
            width:200,
            backgroundColor:"blue",
           
         },

    }
})