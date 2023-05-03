import { makeStyles } from "tss-react/mui";
export const commentStyles = makeStyles()((theme, styles)=>{
    return(
        {  
            commentTopContStyles: {
                display:'flex',
                justifyContent:'center',
                alignItems:'center',
                background:'pink',
                width:'93%',
                position:'absolute',
                top:'10vh',
                left:'7%',
            },

            commentContainer: {
                width:'40%',
                display:'flex',
                justifyContent:'center',
                alignItems:'center',
                background:'orange',
            },

            gridContainerStyles: {
                width:'75%',
                background:'green',
                margin:'1rem 0rem',
            },

            gridItemOneStyles: {
                width:'100%',
            },

            gridItemTwoStyles: {
                width:'100%',
                // overflowY:'scroll',
            },

            commentBoxStyles: {
                background:'purple',
                width:'100%',
            },

            commentCardStyles: {
                background:'red',
            },
        }
    )
})