import { makeStyles } from "tss-react/mui";

export const getProfilePageStyles = makeStyles()((theme)=> ({
        profilePageContStyles: {
            display:'flex',
            flexDirection:'column',
            alignItems:'center',
            height:'100vh',
        },

        userPostLabelConStyles: {
            width:'100%',
            display:'flex',
            justifyContent:'flex-start',
            alignItems:'center',
            marginTop:'30px',
        },

        userPostLabel: {
            background:theme.palette.primary.main,
            color:theme.palette.secondary.main,
            fontWeight:'bold',
            padding:'5px 10px',
            fontSize:'0.75rem',
            border:'none',
            borderRadius:'20px',
        },
    }));