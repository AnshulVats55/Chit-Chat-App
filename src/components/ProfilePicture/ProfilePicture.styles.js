import { makeStyles } from "tss-react/mui";

export const getProfilePictuteStyles = makeStyles()((theme, picStyles)=>{
    return({
        userProfilePicStyles:{
            width:'150px',
            height:'150px',
            borderRadius: '50%',
            boxShadow:'0 3px 10px rgb(0 0 0 / 0.2)',
            margin:'50px 0px',
            '@media screen and (max-width: 899px)': {
                margin:'25px 0px',
            },
            ...picStyles
        }
    });
});