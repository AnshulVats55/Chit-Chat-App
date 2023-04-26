import { makeStyles } from "tss-react/mui";

export const getGridLayoutStyles = makeStyles()((theme)=>{
    return({
        gridContainerStyles:{
            margin:'20px 0px',
            background: '#FFF',
            padding:'0px',
            borderRadius:'10px',
            gap:'1rem 0rem',
        },

        gridItemStyles: {
            display: 'flex',
            flexDirection:'column',
            justifyContent: 'center',
            alignItems: 'center',
            background: theme.palette.secondary.main,
            borderRadius:'10px',
            textAlign:'center',
            opacity:'0.75',
            filter:'blur(0.5px)',
            transition:'0.3s ease-in-out',
            '&:hover': {
                borderBottomWidth:'3px',
                borderStyle:'solid',
                borderColor:theme.palette.primary.main,
                transform: 'translateY(-0.5rem)',
                opacity:'1',
                filter:'blur(0px)',
                boxShadow: 'rgba(0, 0, 0, 0.4) 0px 30px 90px',
            },
        },

        userPostContStyles: {
            width:'100%',
            display:'flex',
            justifyContent:'center',
            alignItems:'center',
            transition:'0.3s ease-in-out',
            marginTop:'10px',
            borderRadius:'10px',
        },

        viewPostContStyles: {
            display:'flex',
            justifyContent:'center',
            alignItems:'center',
            margin:'20px 0px',
        },

        userPostStyles: {
            maxWidth:'95%',
            backgroundSize:'cover',
            borderRadius:'10px',
            transition:'0.3s ease-in-out',
            '&:hover': {
                transform:'scale(0.99)',
            },
        },

        postCaptionCont: {
            width:'95%',
            display:'flex',
            justifyContent:'center',
            alignItems:'center',
            marginTop:'5px',
        },

        postCaption: {
            fontSize:'0.8rem',
            fontWeight:'bold',
        },

        readMore: {
            display:'none',
        },
    });
});