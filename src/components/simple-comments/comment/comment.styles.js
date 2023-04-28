import { makeStyles } from "tss-react/mui";




export const commentStyles = makeStyles()((theme, styles)=>{
    return(
        {   
            commentsContainer:{
                display:'flex',
                flexDirection:"column",
                gap:'2rem'
            },
            container:{
                margin:'2rem'
            },
            avatar:{
                width:'40px',
                height:'40px'
            },

            

            textField:{
                width:'70%',
                height:'1rem',
                '@media screen and (max-width:500px)':{
                     width:'100%',
                     
                }
            },
            button:{
                
                '@media screen and (max-width:500px)':{
                   
                    
               },
                padding:'0.5rem',
                margin:'0.1rem 1rem'
            }
            
        }
    )
})