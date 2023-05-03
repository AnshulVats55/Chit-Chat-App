import { makeStyles } from "tss-react/mui";


export const PostHeaderStyles =makeStyles()((theme,styles)=>{
  return({
    avatar:{
      bgcolor: "red"
    },

    deleteIconStyles: {
      transition:'0.2s ease-in-out',
      '&:hover': {
        color:'red',
      },
    },
    ...styles
  })
})