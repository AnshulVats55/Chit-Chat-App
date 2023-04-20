import { makeStyles } from "tss-react/mui";


export const PostStyles =makeStyles()((theme,styles)=>{
  return({
       flexContain:{
        
         '@media screen and (max-width:599px)':{
          justifyContent:'center',
          width:'70%',
          position:'absolute',
          left:'20%'
         },
         '@media screen and (min-width:900px)':{
          width:'60%',
          position:'absolute',
          right:'10vw'
         }
       }
  })
})

