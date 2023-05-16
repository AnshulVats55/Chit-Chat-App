import { makeStyles } from "tss-react/mui";

export const getViewPostButtonStyles = makeStyles()((theme)=>{
    return({
        viewPostButtonStyles: {
            backgroundColor: theme.palette.primary.main,
            color: '#fff',
            transition: '0.3s ease-in-out',
            borderRadius: '30px',
            '&:hover': {
                transform:'scale(1.05)',
                backgroundColor: theme.palette.primary.main,
                color: '#fff',
            },
            '@media screen and (max-width: 431px)': {
                fontSize:'0.6rem',
            },
        },
    });
});