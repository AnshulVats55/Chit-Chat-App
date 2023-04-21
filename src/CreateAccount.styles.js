import { makeStyles } from 'tss-react/mui';

export const createAccountPageStyles = makeStyles()((theme)=>{
    return({
        errorMsgStyle: {
            marginTop: '10px'
        },

        signupFormContStyles: {
            width:'75%',
            display: 'flex',
            flexDirection:'column',
            justifyContent: 'center',
            backgroundColor:'#FFF',
            padding:'20px 0px',
            '@media screen and (max-width: 900px)': {
                width: "85%",
                margin:'20px 0px',
            },
            '@media screen and (max-width: 600px)': {
                width: "85%",
            },
            '@media screen and (max-width: 450px)': {
                width: "90%",
            },
            borderRadius:'10px',
            border:'none',
            boxShadow: 'rgba(0, 0, 0, 0.15) 0px 15px 25px, rgba(0, 0, 0, 0.05) 0px 5px 10px',
        },

        formStyles: {
            width: "75%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            margin: "10px 0px",
            '@media screen and (max-width: 1200px)': {
                width: "85%",
            },
            '@media screen and (max-width: 450px)': {
                width: "90%",
            },
        },

        root: {
            width:'100%',
            height:'3rem',
            display:'flex',
            justifyContent:'center',
            borderRadius:'5px',
            '&:hover': {
                outline:'none',
                border:'none',
            },
            '&::placeholder': {
                fontSize:'10px',
            }
        },

        input: {
            height:'50%',
            padding:'20px 0px',
            borderRadius:'7px',
            fontSize:'1rem',
            '&:hover': {
                outline:'none',
                border:'none',
            },
            '&::placeholder': {
                fontSize:'10px',
            }
        },

        imageSelectorStyle: {
            width: "100%",
            '&::file-selector-button': {    
                height: "55px",
                border: 'none',
                background: '#3c8df3',
                padding: '0px 28px',
                borderRadius: '30px',
                color: '#fff',
                cursor: 'pointer',
                transition: 'background 0.3s ease-in-out',
                fontWeight: 'bold',
                textAlign: 'center',
                fontSize:'1rem'
            },
            '&::file-selector-button:hover': {
                background: 'transparent',
                border: '2px solid #3c8df3',
                color: '#3c8df3',
            }
        },

        paraStyles: {
            marginRight:'10px',
            fontSize:'0.9rem',
        },

        linkStyles: {
            textDecoration: 'none',
            backgroundColor: theme.palette.secondary.main,
            color: theme.palette.primary.main,
            padding:'5px 15px',
            border:'none',
            borderRadius:'20px',
            fontSize:'0.9rem',
            transition:'0.2s ease-in-out',
            '&:hover': {
                transform:'scale(1.025)',
                backgroundColor: theme.palette.primary.main,
                color: '#FFF',
            },
            '@media screen and (max-width: 406px)': {
                margin:'10px 0px',
            },
        },

        signupButtonStyles: {
            '@media screen and (max-width: 406px)': {
                width: "70%",
            },
        },

        alreadyHaveAnAccountBox: {
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            margin: "10px 0px",
            '@media screen and (max-width: 406px)': {
                flexDirection:'column',
            },
        },
    });
});