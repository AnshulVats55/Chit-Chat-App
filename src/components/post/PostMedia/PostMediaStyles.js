
import { makeStyles } from "tss-react/mui"
export const PostMediaStyles = makeStyles()((theme,styles)=>{
    return({
        container:{
            width:'100%',
            ...styles
        }
        
    })
})