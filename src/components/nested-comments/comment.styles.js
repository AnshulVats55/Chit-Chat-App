import {makeStyles} from 'tss-react/mui';


export const commentStyle = makeStyles()((theme,styles)=>{
        return ({
          
        //     * {
        //     font-family: Monaco, sans-serif;
        //   },
          
          container :{
            marginTop: '20px',
            width: 'fitContent'
          },
          
          commentContainer :{
            marginTop: '6px',
            backgroundColor: '#d3d3d3e0',
            display: 'flex',
            flexDirection: 'column',
            padding: '5px 10px',
            width: '300px',
            cursor: 'pointer',
            borderRadius: '5px',
            '&:hover':{
                backgroundColor: '#d3d3d3bf'
          },
          
          
        },
         commentContainerSpan:{

           margin: '0 5px'
         },
            
         
          
          inputContainer : {
            display: 'flex',
            alignItems: 'baseline',
            gap: '5px',
           
          },

          inputContainerSpan:{
            marginTop:'5px'
          },
          
          inputContainerFirstInput : {
            margin: '6px 0px 0px 0px',
            padding: '5px',
            display: 'flex',
            border: '1px solid lightgray',
            alignItems: 'center',
            justifyContent: 'spaceBetween',
            cursor: 'pointer',
            borderRadius: '5px',
            backgroundColor: '#e7e7e7',
            margin: '0',
          },
          
          inputContainerInput:{
            margin: '6px 0px 0px 0px',
            padding: '5px',
            display: 'flex',
            border: '1px solid lightgray',
            alignItems: 'center',
            justifyContent: 'spaceBetween',
            cursor: 'pointer',
            borderRadius: '5px',
            backgroundColor: '#e7e7e7',
          },
          
          reply : {
            fontSize: '12px',
            padding: '5px',
            borderRadius: '5px',
            color: '#4e4e4e',
            fontWeight: '600',
            cursor: 'pointer',
          },
          comment :{
            color: '#ffffff',
            backgroundColor: '#569dff',
            letterSpacing: '0.8px',
          }
          

        })
    })