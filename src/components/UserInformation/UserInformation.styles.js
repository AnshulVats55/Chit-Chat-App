import { makeStyles } from "tss-react/mui";

export const getUserInfoStyles = makeStyles()((theme, userInfoBoxStyles)=>{
    return({
        userInfoBoxStyles:{
            display: 'flex',
            border: 'none',
            background: 'transparent',
            ...userInfoBoxStyles
        }
    });
});