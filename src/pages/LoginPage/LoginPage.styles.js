import { makeStyles } from 'tss-react/mui';

export const getLoginPageStyles = makeStyles()((theme)=>{
    return({
        dontHaveAnAccountBox: {
            display:'flex',
            justifyContent:'center',
            alignItems:'center',
            margin:'10px 0px',
            '@media screen and (max-width: 1116px)': {
                width:'85%',
            },
            '@media screen and (max-width: 1116px)': {
                width:'90%',
            },
            '@media screen and (max-width: 459px)': {
                flexDirection:'column',
                alignItems: 'center',
                justifyContent: 'center'
            }
        },

        loginPageContStyles: {
            width:'100%',
            display: "flex",
            flexDirection:'column',
            justifyContent: "center",
            alignItems: "center",
        },

        loginFormContStyles: {
            width:'60%',
            display: 'flex',
            flexDirection:'column',
            justifyContent: 'center',
            alignItems:'center',
            backgroundColor:'#FFF',
            padding:'20px 0px',
            '@media screen and (max-width: 986px)': {
                width: "70%",
                margin:'20px 0px',
            },
            '@media screen and (max-width: 899px)': {
                width: "70%",
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
            '@media screen and (max-width: 900px)': {
                width: "80%",
            },
            '@media screen and (max-width: 600px)': {
                width: "85%",
            },
            '@media screen and (max-width: 450px)': {
                width: "95%",
            },
        },

        root: {
            width:'100%',
            height:'3.25rem',
            display:'flex',
            justifyContent:'center',
            borderRadius:'25px',
            margin:'10px 0px'
        },

        input: {
            height:'50%',
            padding:'25px 0px',
            borderRadius:'25px',
            fontSize:'1rem',
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
            '@media screen and (max-width: 459px)': {
                margin:'5px 0px'
            },
        }
    });
});