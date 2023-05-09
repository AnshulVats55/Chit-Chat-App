import { makeStyles } from "tss-react/mui";

export const PostStyles =makeStyles()((theme,styles)=>{
  return({

   PostsTopContStyles: {
      display:'flex',
      flexDirection:'row',
      width:'93%',
      position:'relative',
      top:'10vh',
      left:'7%',
      overflowY: 'hidden',
      '@media screen and (max-width: 900px)': {
          left:'0vw',
          width:'100%',
      },
    },

    postContStyles: {
      maxWidth:'75%',
      display:'flex',
      flexDirection:'column',
      alignItems:'center',
      overflowY:'hidden',
    },

    friendReqGridStyles:{
      maxWidth:'25%',
    },

    friendReqGridItemStyles:{
      maxWidth:'100%',
    },

    gridContainerStyles: {
      position:'relative',
      top:'10vh',
      margin:'0rem auto',
      width:'75%',
      justifyContent:'center',
      alignItems:'center',
      '@media screen and (max-width: 900px)': {
        width:'75%',
      },
      '@media screen and (max-width: 600px)': {
        width:'100%',
      },
    },

    gridItemStyles: {
      display:'flex',
      justifyContent:'center',
      alignItems:'center',
      margin:'1rem 0rem',
    },

    cardContainer: {
      width:'75%',
      transition:'0.2s ease-in-out',
      '&:hover': {
        boxShadow: 'rgba(0, 0, 0, 0.07) 0px 1px 2px, rgba(0, 0, 0, 0.07) 0px 2px 4px, rgba(0, 0, 0, 0.07) 0px 4px 8px, rgba(0, 0, 0, 0.07) 0px 8px 16px, rgba(0, 0, 0, 0.07) 0px 16px 32px, rgba(0, 0, 0, 0.07) 0px 32px 64px',
      },
    },

    postMediaContainer: {
      width:'100%',
    },

    postMedia: {
      maxWidth:'100%',
      margin:'10px 0px'
    },
  });
})

