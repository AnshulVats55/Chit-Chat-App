import { makeStyles } from "tss-react/mui";

export const NavbarStyles =makeStyles()((theme =>{
return  { 
  container: {
    background: "transparent",
    height: "60px",
  },
  mainContainer: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "5px 50px",
    "@media screen and (max-width: 900px)":{
        padding:"5px 20px"
},
"@media screen and (max-width: 600px)":{
    padding:"0"
},
    
  },

  link:{
    textAlign:"center",textDecoration:"none", color:"blue"
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
    display: "none",
    alignItems: "center",
    justifyContent:"flex-start",
    "@media screen and (max-width: 900px)":{
            display: "flex",
            // marginRight:"1rem"
    },
    "@media screen and (max-width: 600px)":{
        marginLeft:"3rem"
},
    
  },
  iconsContainer:{

    flexGrow: 0.3, justifyContent:'flex-start'

  },
  icons:{
    my: 2,  display: 'block', color:'blue', padding:'0px 40px'
  },
  imgContainer:{
    width:"16%",
    marginRight: "10px",
  },
  img:{
    width:"100%",
  },
  h5:{
    color:"blue",
    fontWeight:"bold",
  }
}}));