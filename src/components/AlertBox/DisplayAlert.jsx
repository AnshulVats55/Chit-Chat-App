import React,{useState} from 'react';
import Button from '@mui/material/Button';
import Snackbar from '@mui/material/Snackbar';
import Slide from '@mui/material/Slide';
import Alert from '@mui/material/Alert';

const DisplayAlert = ({message, status}) => {

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
                   return <Alert severity="success" variant='filled'>{message}</Alert>
                else if(status=="info")
                   return  <Alert severity="info" variant='filled'>{message}</Alert>
                else
                    return <Alert severity="error" variant='filled'>{message}</Alert>
            })()}
              
        </Snackbar>
    </>
  )
}

export default DisplayAlert












