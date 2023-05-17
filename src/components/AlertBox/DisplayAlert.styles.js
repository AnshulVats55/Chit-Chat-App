import { makeStyles } from "tss-react/mui";

export const getDisplayAlertStyles = makeStyles()((theme)=>{
    return(
        {
            infoAlertBoxStyles: {
                color:'#FFF',
                fontSize:'1rem',
                fontWeight:'bold',
                backgroundColor:theme.palette.primary.main,
            },

            otherAlertBoxStyles: {
                color:'#FFF',
                fontSize:'1rem',
                fontWeight:'bold',
            },
        }
    )
});