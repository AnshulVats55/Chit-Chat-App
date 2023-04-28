import { makeStyles } from "tss-react/mui";


export const sidebarStyle = makeStyles()((theme,styles)=>{
    return{
      // sidebarLabel:{
      //   display:"flex",
      //   justifyContent:"center",
      //   alignItems:"center"
        
      // },
      
      styleBox:{
        width:'100px',
        height: "100vh",
        backgroundColor: 'wheat',    
      },

      // styleTab:{
      //   position: "absolute",
      //    bottom: "70px" ,
      //    left:"30px"
      // }, 
      
      sidebarIconContStyles: {
          display:'flex',
          flexDirection:'column',
          justifyContent:'center',
          alignItems:'center',
          background:'cyan',
          margin:'10px 0px',
          padding:'10px 0px',
      },

      sidebarLinkName: {
          textDecoration:'none',
          fontSize:'1rem',
      },
    }
})