import { makeStyles } from "tss-react/mui";


export const sidebarStyle = makeStyles()((theme,styles)=>{
    return{
      // sidebarLabel:{
      //   display:"flex",
      //   justifyContent:"center",
      //   alignItems:"center"
        
      // },
      
      styleBox:{
        '@media screen and (max-width:600px)':{
            display:'none'
        },
        width: 200,
        height: "100vh",
        backgroundColor: 'transparent',
       
      },

      styleTab:{
        position: "absolute",
         bottom: "70px" ,
         left:"30px"
      }
    }
})