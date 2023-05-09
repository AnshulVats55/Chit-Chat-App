import { makeStyles } from 'tss-react/mui';

export const createAccountPageStyles = makeStyles()((theme)=>{
    return({
        errorTextStyle:{
            color:theme.palette.warning.main,

        },
        successTextStyle:{
            color:theme.palette.success.main  
        },
        signupPageContStyles: {
            width:'100%',
            display: "flex",
            flexDirection:'column',
            justifyContent: "center",
            alignItems: "center",
        },

        signupImage: {
            '@media screen and (max-width: 900px)': {
                display:'none',
            },
        },

        signupFormContStyles: {
            width:'65%',
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
            width: "80%",
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
            height:'3.25rem',
            display:'flex',
            justifyContent:'center',
            borderRadius:'5px',
        },

        input: {
            height:'50%',
            padding:'20px 0px',
            borderRadius:'7px',
            fontSize:'1rem',
        },

        selectGenderRoot: {
            width:'100%',
            height:'2rem',
            display:'flex',
            background:'transparent',
            justifyContent:'center',
            '&:hover': {
                background:'transparent',
            },
            '&:focus': {
                background:'transparent',
            },
        },

        selectGenderInput: {
            padding:'15px 0px',
            borderRadius:'7px',
            fontSize:'1rem',
        },

        imageSelectorStyle: {
            width: "100%",
            '&::file-selector-button': {
                height: "40px",
                border: 'none',
                background: theme.palette.primary.main,
                padding: '0px 12px',
                margin: '10px 10px 0px 0px',
                borderRadius: '30px',
                color: '#fff',
                cursor: 'pointer',
                transition: 'background 0.3s ease-in-out',
                fontWeight: 'bold',
                textAlign: 'center',
                fontSize:'1rem',
                marginRight:"1rem"
            },
            '&::file-selector-button:hover': {
                background: 'transparent',
                borderWidth: '2px',
                borderStyle: 'solid',
                borderColor: theme.palette.primary.main,
                color: theme.palette.primary.main,
            },
        },

        paraStyles: {
            marginRight:'10px',
            fontSize:'0.9rem',
            fontWeight:'bold',
        },

        linkStyles: {
            textDecoration: 'none',
            backgroundColor: theme.palette.secondary.main,
            color: theme.palette.primary.main,
            padding:'5px 15px',
            border:'none',
            borderRadius:'20px',
            fontSize:'0.9rem',
            fontWeight:'bold',
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