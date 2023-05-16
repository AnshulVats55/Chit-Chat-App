import React,{useState} from 'react';
import Button from '@mui/material/Button';
import Snackbar from '@mui/material/Snackbar';
import Slide from '@mui/material/Slide';
import Alert from '@mui/material/Alert';
import { useSelector } from "react-redux";

const DisplayAlert = () => {

    const[open,setOpen]=useState(true);
    const handleClick=()=>{
        setOpen(true);
    }
    const handleClose=(event,reason)=>{
        if(reason === 'clickaway'){
            return;
        }
        setOpen(false);
    }
    const alertData = useSelector((state) => {
        console.log(state.displayAlertReducer)
        return state.displayAlertReducer;
      })

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
                if(status=="success")
                   return <Alert severity="success" variant='filled'>{alertData.message}</Alert>
                else if(status=="info")
                   return  <Alert severity="info" variant='filled'>{alertData.message}</Alert>
                else
                    return <Alert severity="error" variant='filled'>{alertData.message}</Alert>
            })()}
              
        </Snackbar>
    </>
  )
}

export default DisplayAlert












