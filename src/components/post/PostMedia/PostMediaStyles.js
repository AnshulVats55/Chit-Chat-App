
import { makeStyles } from "tss-react/mui"
export const PostMediaStyles = makeStyles()((theme,styles)=>{
    return({
        container:{
            maxWidth:'100%',
            ...styles
        },
    })
})