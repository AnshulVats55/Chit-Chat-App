import { makeStyles } from "tss-react/mui";


export const PostBodyStyles =makeStyles()((theme,styles)=>{
  return({
    
    cardContent:{
      fontSize:'1rem',
      '@media screen and (max-width: 600px)': {
        fontSize:'0.90rem',
      },
    },
    ...styles
  })
})

