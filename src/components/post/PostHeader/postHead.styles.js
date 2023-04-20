import { makeStyles } from "tss-react/mui";


export const PostHeaderStyles =makeStyles()((theme,styles)=>{
  return({
    avatar:{ bgcolor: "red" },
    
    ...styles
  })
})