import { makeStyles } from 'tss-react/mui';

export const getFeedPageStyles = makeStyles()((theme)=>{
    return({
        feedPageTopContStyles: {
            position:'absolute',
            top:'10vh',
            left:'7%',
            width:'93%',
            height:'90vh',
            '@media screen and (max-width: 900px)': {
                left:'0vw',
                width:'100%',
            },
        },
    });
});