import React,{useState} from 'react';
import Snackbar from '@mui/material/Snackbar';
import Slide from '@mui/material/Slide';
import Alert from '@mui/material/Alert';
import { useSelector } from "react-redux";
import { getDisplayAlertStyles } from './DisplayAlert.styles';

const DisplayAlert = () => {

    const { classes } = getDisplayAlertStyles();

    const[open, setOpen] = useState(true);

    const handleClick=()=>{
        setOpen(true);
    }
    
    const handleClose=(reason)=>{
        if(reason === 'clickaway'){
            return;
        }
        setOpen(false);
    }

    const alertData = useSelector((state) => {
        return state.displayAlertReducer;
    });

    let status = alertData.status;

    return (
    <>
       <Snackbar 
         open={open}
         autoHideDuration={3000}
         onClose={handleClose}
         TransitionComponent={(props)=><Slide {...props} direction='down'/>}
         anchorOrigin={
            {
                vertical:"top",
                horizontal:"center",
            }
         }
         >
            {(() => {
                if(status === "success")
                   return <Alert severity="success" variant='filled' className={classes.otherAlertBoxStyles}>{alertData.message}</Alert>
                else if(status === "info")
                   return  <Alert severity="info" variant='filled' className={classes.infoAlertBoxStyles}>{alertData.message}</Alert>
                else
                    return <Alert severity="error" variant='filled' className={classes.otherAlertBoxStyles}>{alertData.message}</Alert>
            })()}
        </Snackbar>
    </>
  )
}

export default DisplayAlert












