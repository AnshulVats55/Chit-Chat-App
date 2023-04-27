import { makeStyles } from "tss-react/mui";

export const getViewPostStyles = makeStyles()(()=>{
    return({
        viewPostTopContStyles: {
            position:'absolute',
            top:'10vh',
            left:'7%',
            width:'93%',
            height:'90vh',
            display:'flex',
            justifyContent:'center',
            '@media screen and (max-width: 900px)': {
                left:'0vw',
                width:'100%',
            },
        },

        viewPostGridContStyles: {
            justifyContent:'center',
        },

        viewPostGridItemStyles: {
            display:'flex',
            justifyContent:'center',
            background:'pink',
        },
    });
});