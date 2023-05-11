import { border } from "@chakra-ui/react";
import { makeStyles } from "tss-react/mui";


export const modalStyle = makeStyles()((theme,styles)=>{
    return{

     header:{
        backgroundColor: theme.palette.primary.main,
        color: '#fff',
        fontWeight: 'bold',
     },
     body:{
        backgroundColor:"red",
        width:"50%",
        border:"2px solid red",
     }

    }})