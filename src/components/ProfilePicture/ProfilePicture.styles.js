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
            // animationName:'$ripple',
            // animationDuration:'4s',
            // animationIterationCount:'infinite',
            // "@keyframes ripple": {
            //     "0%": {
            //         boxShadow: '0 0 0 0 rgba(#FFF, 0.3), 0 0 0 1px rgba(#FFF, 0.3), 0 0 0 3px rgba(#FFF, 0.3), 0 0 0 5px rgba(#FFF, 0.3)'
            //     },

            //     "100%": {
            //         boxShadow: '0 0 0 0 rgba(#FFF, 0.3), 0 0 0 4px rgba(#FFF, 0.3), 0 0 0 20px rgba(#FFF, 0), 0 0 0 30px rgba(#FFF, 0)'
            //     }
            // }
        }
    });
});