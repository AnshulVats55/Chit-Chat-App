import { makeStyles } from "tss-react/mui";

export const getProfilePictuteStyles = makeStyles()((theme, picStyles)=>{
    return({
        userProfilePicStyles:{
            width:'150px',
            height:'150px',
            borderRadius: '50%',
            '@media screen and (max-width: 899px)': {
                width:'100px',
                height:'100px',
            },
            '@media screen and (max-width: 599px)': {
                width:'75px',
                height:'75px',
            },
            ...picStyles
        }
    });
});