import { makeStyles } from "tss-react/mui";

export const getGridLayoutStyles = makeStyles()((theme)=>{
    return({

        gridContainerStyles:{
            margin:'50px 0px',
            background: theme.palette.accent.main,
            padding:'20px',
            borderRadius:'10px',
        },

        gridItemStyles: {
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            background: 'transparent',
            border:'1px solid black',
            borderRadius:'5px',
            textAlign:'center',
            margin:'5px 0px',
        },
    });
});