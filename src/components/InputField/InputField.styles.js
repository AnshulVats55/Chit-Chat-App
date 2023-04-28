import { makeStyles } from "tss-react/mui";

export const getInputFieldStyles = makeStyles()((theme, style)=>{
    return(
        {
            allInputFieldStyles:{
                width: "100%",
                ...style
            }
        }
    )
});