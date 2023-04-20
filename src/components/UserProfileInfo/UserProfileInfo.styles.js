import { makeStyles } from 'tss-react/mui';

export const getUserProfileInfoBoxStyles = makeStyles()(()=>{
    return({
        userProfileInfoGrid: {
            width:'100%',
            backgroundColor:'transparent',
            marginTop:'50px'
        },

        userProfileInfoGridItem: {
            display:'flex',
            justifyContent:'center',
            alignItems:'center',
        },

        followerInfo: {
            display:'flex',
            justifyContent:'space-between',
        },

        userSocialInfoCon: {
            display:'flex',
            alignItems:'center',
        },

        userSocialInfo: {
            display:'flex',
            flexDirection:'column',
            justifyContent:'center',
            backgroundColor:'transparent'
        },

        userName: {
            padding:'0px 20px 0px',
        },
        
        postAndfollowerCount: {
            padding:'20px 20px 0px',
        },

        userBio: {
            padding:'20px 20px 0px',
        }
    });
});