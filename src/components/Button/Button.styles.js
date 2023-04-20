import { makeStyles } from "tss-react/mui";

export const getButtonStyles = makeStyles()((theme, buttonStyles)=>{
    return(
        {
            allButtonStyles: {
                backgroundColor: '#3c8df3',
                color: '#fff',
                fontWeight: 'bold',
                '&:hover': {
                    background: 'transparent',
                    boxShadow: 'none',
                    color: '#3b8df3',
                    border: '2px solid #3b8df3'
                },
                ...buttonStyles
            },
        }
    );
});