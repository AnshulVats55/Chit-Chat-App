import { Avatar, CardHeader, IconButton, Typography } from "@mui/material";
import React,{useContext} from "react";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { PostHeaderStyles } from "./postHead.styles";
import { Name } from "./Name/Name";
import { Dates } from "./Dates/Dates";
import DeleteIcon from '@mui/icons-material/Delete';
import PostContext from "../Posts";
import { useSelector } from "react-redux";


export const PostHeader = ({ post, styles }) => {

  const { classes } = PostHeaderStyles(styles);
  

  const {handleDeletePost} = useContext(PostContext)
  const handleDelete =()=>{
    //  console.log(post.id)
    //  console.log(handleDeletePost)
     handleDeletePost(post.id)
  };

  const currentUserId = useSelector((state)=>{
      return state.userDataReducer[0].data.user.id;
  });

  return (
    <CardHeader
      avatar={<Avatar aria-label="recipe" src={post["user.profilePicture"]}></Avatar>}
      action={
        <IconButton aria-label="settings" onClick={handleDelete}>
          {
            currentUserId == post.userId
            ?
            <DeleteIcon className={classes.deleteIconStyles}/>
            :
            <></>
          }
        </IconButton>
      }
      title={<Typography variant="body1" fontWeight={'bold'}>{post["user.firstName"] + " " + post["user.lastName"]}</Typography>}
      titles={<Typography variant="body1" fontWeight={'bold'}>{post.userName}</Typography>}
      subheader={post.createdAt.substring(0, 10).split("-").reverse().join("-")}
    />
  );
};

// PostHeader.defaultProps = {
//   avatarLetter: "R",
//   title: "Shrimp and Chorizo Paella",
//   postDate: `${new Date()}`,
// };
