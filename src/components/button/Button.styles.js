import { makeStyles } from "tss-react/mui";

export const getButtonStyles = makeStyles()((theme, props)=>{
    return(
        {
            allButtonStyles: {
                width: props.width,
                height: props.height,
                backgroundColor: '#3c8df3',
                color: '#fff',
                marginBottom : props.marginBottom || "5px",
                fontWeight: 'bold',
                fontSize: props.fontSize,
                '&:hover': {
                    background: 'transparent',
                    boxShadow: 'none',
                    color: '#3b8df3',
                    border: '2px solid #3b8df3'
                }
            },
        }
    );
});