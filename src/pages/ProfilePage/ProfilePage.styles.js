import { makeStyles } from "tss-react/mui";

export const getProfilePageStyles = makeStyles()((theme)=> ({
        profilePageTopContStyles: {
            display:'flex',
            justifyContent:'center',
            alignItems:'center',
            width:'93%',
            position:'absolute',
            top:'10vh',
            left:'7%',
            '@media screen and (max-width: 900px)': {
                left:'0vw',
                width:'100%',
            },
        },

        profilePageContStyles: {
            display:'flex',
            flexDirection:'column',
            alignItems:'center',
        },

        userPostLabelConStyles: {
            width:'100%',
            display:'flex',
            justifyContent:'flex-start',
            alignItems:'center',
            marginTop:'30px',
            '@media screen and (max-width: 599px)': {
                justifyContent:'center',
            },
        },

        userPostLabel: {
            background:theme.palette.primary.main,
            color:theme.palette.secondary.main,
            fontWeight:'bold',
            padding:'6px 10px',
            fontSize:'0.75rem',
            border:'none',
            borderRadius:'20px',
        },

        createPostBtnContStyles: {
            margin:'0px 20px',
        },
    }));