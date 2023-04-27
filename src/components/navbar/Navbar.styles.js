import { makeStyles } from "tss-react/mui";

export const NavbarStyles =makeStyles()((theme)=>{
    return({
        container: {
            background:'#FFF',
            padding:'7px 0px',
            boxShadow: 'rgba(0, 0, 0, 0.2) 0px 0px 25px',
            height:"10vh",
        },
        
          mainContainer: {
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            width:'100%'
          },
        
          link:{
            textAlign:"center",
            textDecoration:"none",
            color:theme.palette.primary.main,
          },
        
          left:{
            display: "flex",
            alignItems: "center",
            justifyContent:"flex-start",
            "@media screen and (max-width: 900px)":{
                display: "none",
            }
          },

          leftMain:{
            width:'90%',
            display: "none",
            alignItems: "center",
            justifyContent:"center",
            "@media screen and (max-width: 900px)":{
                display: "flex",    
            }, 
            '@media screen and (max-width: 350px)': {
                width:'80%',
            },
        },

        iconsContainer:{
            position:'absolute',
            left:'30%',
            width:'40%',
            display:'flex',
            justifyContent:'space-between',
            alignItems:'center',
            '@media screen and (max-width: 900px)': {
                display:'none',
            },
        },

        icons:{
            color:theme.palette.primary.main,
            margin:'0px 50px',
            padding:'5px 10px',
            '&:hover': {
                background:theme.palette.secondary.main,
                borderRadius:'25px'
            },
        },
        
        imgContainer:{
            width:"16%",
            marginRight: "10px",
        },

        img:{
            width:"100%",
        },

        h5:{
            color:theme.palette.primary.main,
            fontWeight:"bold",
            fontSize:'1.25rem',
            '@media screen and (max-width: 350px)': {
                fontSize:'1rem',
            },
        }
    });
});