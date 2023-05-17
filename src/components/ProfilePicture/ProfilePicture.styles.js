import { makeStyles } from "tss-react/mui";

export const getProfilePictuteStyles = makeStyles()((theme, picStyles)=>{
    return({
        userProfilePicStyles:{
            width:'150px',
            height:'150px',
            borderRadius: '50%',
            boxShadow: 'rgba(0, 0, 0, 0.4) 0px 30px 90px',
            margin:'50px 0px',
            '@media screen and (max-width: 899px)': {
                margin:'25px 0px',
            },
            ...picStyles
        },

        userProfilePicContStyles: {
            display:'flex',
            justifyContent:'center',
            alignItems:'center',
        }
    });
});