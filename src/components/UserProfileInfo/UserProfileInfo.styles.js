import { Scale } from '@mui/icons-material';
import { makeStyles } from 'tss-react/mui';

export const getUserProfileInfoBoxStyles = makeStyles()((theme)=>{
    return({
        userProfileInfoGrid: {
            width:'100%',
            backgroundColor:'transparent',
            marginTop:'50px',
            backgroundColor:'#F7F7F7',
            marginTop:'25px',
            border:'none',
            borderRadius:'10px',

        },

        userProfileInfoGridItem: {
            display:'flex',
            justifyContent:'center',
            alignItems:'center',
        },

        followerInfo: {
            display:'flex',
            justifyContent:'space-between',
            margin:'0px 20px',
            '@media screen and (max-width: 545px)': {
                flexDirection:'column',
                alignItems:'center',
            },
        },

        userSocialInfoCon: {
            display:'flex',
            alignItems:'center',
            '@media screen and (max-width: 899px)': {
                justifyContent:'center',
            },
        },

        userSocialInfo: {
            width:'60%',
            display:'flex',
            flexDirection:'column',
            justifyContent:'center',
            backgroundColor:'transparent',
            '@media screen and (max-width: 899px)': {
                width:'80%',
            },
        },

        userName: {
            padding:'0px 20px 20px',
            fontSize:'1.5rem',
            fontWeight:'bold',
            '@media screen and (max-width: 899px)': {
                textAlign:'center',
            },
        },

        socialAnalytics: {
            fontFamily:theme.typography.fontFamily[0],
            fontSize:'0.9rem',
            textAlign:'center',
            background:theme.palette.secondary.main,
            color:theme.palette.primary.main,
            border:'none',
            borderRadius:'20px',
            padding:'5px 15px',
            transition:'0.2s ease-in-out',
            '&:hover': {
                transform: 'scale(1.05)',
                background:theme.palette.primary.main,
                color:theme.palette.secondary.main,
            },
            '@media screen and (max-width: 961px)': {
                fontSize:'0.8rem',
            },
            '@media screen and (max-width: 899px)': {
                fontSize:'0.9rem',
            },
            '@media screen and (max-width: 545px)': {
                margin:'5px 0px',
                width:'50%',
            },
            '@media screen and (max-width: 431px)': {
                width:'75%',
            },
            '@media screen and (max-width: 314px)': {
                width:'100%',
            },
        },

        userBio: {
            fontFamily:theme.typography.fontFamily[0],
            fontSize:'0.9rem',
            padding:'20px 20px 0px',
            '@media screen and (max-width: 899px)': {
                textAlign:'center',
            },
        }
    });
});