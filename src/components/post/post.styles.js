import { makeStyles } from "tss-react/mui";

export const PostStyles =makeStyles()((theme,styles)=>{
  return({

    PostsTopContStyles: {
      display:'flex',
      flexDirection:'column',
      justifyContent:'center',
      alignItems:'center',
      width:'93%',
      position:'absolute',
      top:'10vh',
      left:'7%',
      '@media screen and (max-width: 900px)': {
          left:'0vw',
          width:'100%',
      },
    },

    gridContainerStyles: {
      position:'absolute',
      top:'35vh',
      width:'50%',
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

    postContent: {
      // background:'red',
    },

    // flexContain:{
    //     flexDirection:'column',
    //     gap:'50px',
    //     backgroundColor:'pink',
        
    //   '@media screen and (max-width:599px)':{
    //     justifyContent:'center',
    //     width:'70%',
    //     position:'absolute',
    //     right:'10vw'
    //   },
    //   '@media screen and (min-width:900px)':{
    //     width:'60%',
    //     position:'absolute',
    //     right:'10vw'
    //   }
    // },
  });
})

