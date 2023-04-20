import { makeStyles } from "tss-react/mui";


export const PostStyles =makeStyles()((theme,styles)=>{
  return({
       flexContain:{
          flexDirection:'column',
          gap:'50px',
          backgroundColor:'#eee',
          
         '@media screen and (max-width:599px)':{
          justifyContent:'center',
          width:'70%',
          position:'absolute',
          right:'10vw'
         },
         '@media screen and (min-width:900px)':{
          width:'60%',
          position:'absolute',
          right:'10vw'
         }
       }
  })
})

