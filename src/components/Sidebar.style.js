import { makeStyles } from "tss-react/mui";


export const sidebarStyle = makeStyles()((theme,styles)=>{
    return{
      // sidebarLabel:{
      //   display:"flex",
      //   justifyContent:"center",
      //   alignItems:"center"
        
      // },
      styleBox:{
        width: 200,
        height: "100vh",
        backgroundColor: 'transparent',
        boxShadow: '1px 2px 9px lightblue',
      },

      styleTab:{
        position: "absolute",
         bottom: "20px" ,
         left:"30px"
      }
    }
})