import { makeStyles } from "tss-react/mui";

export const getGridLayoutStyles = makeStyles()((theme)=>{
    return({

        gridContainerStyles:{
            margin:'50px 0px',
            background:'transparent'
        },

        gridItemStyles: {
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            background: 'transparent',
            border:'1px solid black',
        },
    });
});