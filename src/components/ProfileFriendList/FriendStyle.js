import { backdropClasses } from "@mui/material";
import { makeStyles } from "tss-react/mui";

export const FriendStyles = makeStyles()((theme)=>{
    return({

      mainContainer:{
        maxWidth:"25rem",
        backgroundColor:"grey",
        margin:"100px",
        border:'2px solid blue'
        
      },
      list:{
       
        "&:hover": {
            // backgroundColor: "blue",
            // color: "white",
            boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
            
          }
      },
      button:{
        fontSize:"15px",
        color:"#363a91",
      }
    });
})