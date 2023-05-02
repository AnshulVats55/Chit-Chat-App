import { Avatar, CardHeader, IconButton } from "@mui/material";
import React,{useContext} from "react";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { PostHeaderStyles } from "./postHead.styles";
import { Name } from "./Name/Name";
import { Dates } from "./Dates/Dates";
import DeleteIcon from '@mui/icons-material/Delete';
import PostContext from "../Posts";
import { useSelector } from "react-redux";

export const PostHeader = ({ post, avatarLetter, title, postDate, styles, postCreatorId }) => {

  const { classes } = PostHeaderStyles(styles);

  const {handleDeletePost} = useContext(PostContext)
  const handleDelete =()=>{
    //  console.log(post.id)
    //  console.log(handleDeletePost)
     handleDeletePost(post.id)
  }

  const currentUserDetails = useSelector((state)=>{
    return state.userDataReducer[0];
  });

  const currentUserId = currentUserDetails.data.user.id,
        currentUserName = currentUserDetails.data.user.firstName + " " + currentUserDetails.data.user.lastName,
        currentUserProfilePic = currentUserDetails.data.user.profilePicture;

  return (
    <CardHeader
      avatar={<Avatar aria-label="recipe" src={currentUserProfilePic}></Avatar>}
      action={
        <IconButton aria-label="settings" onClick={handleDelete}>
          {
            currentUserId == postCreatorId
            ?
            <DeleteIcon className={classes.deleteIconStyles}/>
            :
            <></>
          }
        </IconButton>
      }
      title={currentUserName}
      subheader=""
    />
  );
};

// PostHeader.defaultProps = {
//   avatarLetter: "R",
//   title: "Shrimp and Chorizo Paella",
//   postDate: `${new Date()}`,
// };
