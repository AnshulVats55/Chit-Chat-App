import { makeStyles } from "tss-react/mui";

export const getViewPostButtonStyles = makeStyles()((theme)=>{
    return({
        viewPostButtonStyles: {
            backgroundColor: theme.palette.primary.main,
            color: '#fff',
            fontSize:'0.75rem',
            fontWeight: 'bold',
            transition: '0.3s ease-in-out',
            borderRadius: '20px',
            padding:'7px 10px',
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