import { makeStyles } from 'tss-react/mui';

export const getBrandIdentityStyles = makeStyles()((theme)=>{
    return({
        brandIdentityContStyles: {
            maxWidth:'15%',
            display:'flex',
            justifyContent:'space-evenly',
            alignItems:'center',
            '@media screen and (max-width: 947px)': {
                maxWidth:'20%',
            },

            '@media screen and (max-width: 723px)': {
                maxWidth:'25%',
            },

            '@media screen and (max-width: 571px)': {
                maxWidth:'30%',
            },

            '@media screen and (max-width: 481px)': {
                maxWidth:'35%',
            },

            '@media screen and (max-width: 417px)': {
                maxWidth:'40%',
            },

            '@media screen and (max-width: 324px)': {
                maxWidth:'50%',
            }
        },

        brandLogoStyles: {
            maxWidth:'20%',
        },

        brandNameStyles: {
            fontSize:'1.5rem',
            color: theme.palette.primary.main,
            fontWeight:'bold',
            '@media screen and (max-width: 417px)': {
                fontSize:'1.30rem',
            },
            '@media screen and (max-width: 324px)': {
                fontSize:'1.20rem',
            }
        },       
    });
});