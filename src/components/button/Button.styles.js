import { makeStyles } from "tss-react/mui";

export const getButtonStyles = makeStyles()((theme, props)=>{
    console.log(props);
    return({
        myButtonStyles: {
            width: props.width,
            height: props.height,
            backgroundColor: 'red',
            color: props.color,
            marginBottom : props.marginBottom ? props.marginBottom : "10px"
        },  
    });
});