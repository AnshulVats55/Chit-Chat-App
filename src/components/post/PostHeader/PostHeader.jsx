import { Avatar, CardHeader, IconButton, Typography } from "@mui/material";
import React, { useContext } from "react";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { PostHeaderStyles } from "./postHead.styles";
import { Name } from "./Name/Name";
import { Dates } from "./Dates/Dates";
import DeleteIcon from "@mui/icons-material/Delete";
import PostContext from "../Posts";
import { useSelector } from "react-redux";
import DeleteModal from '../../../components/DeleteModal/DeleteModal'

export const PostHeader = ({ post, styles }) => {
  const user = useSelector((state) => {
    return state.userDataReducer[0]?.data.user;
  });
  const { classes } = PostHeaderStyles(styles);

  const { handleDeletePost } = useContext(PostContext);
  const handleDelete = () => {
    //  console.log(post.id)
    //  console.log(handleDeletePost)
    handleDeletePost(post.id);
  };

  const currentUserId = useSelector((state) => {
    return state.userDataReducer[0]?.data?.user.id;
  });
  //  console.log(post['user.first'])
  return (
    <CardHeader
      avatar={
        <Avatar
          aria-label="recipe"
          src={
            post["user.profilePicture"]
              ? post["user.profilePicture"]
              : user?.profilePicture
          }
        ></Avatar>
      }
      action={
        <IconButton aria-label="settings">
          {
            currentUserId == post.userId
            ?
            <DeleteModal id={post.id} />
            :
            <></>
          }
        </IconButton>
      }
      title={
        <Typography variant="body1" fontWeight={"bold"}>
          {(post["user.firstName"] ? post["user.firstName"] : user.firstName) +
            " " +
            (post["user.lastName"] ? post["user.lastName"] : user.lastName)}
        </Typography>
      }
      subheader={post.createdAt.substring(0, 10).split("-").reverse().join("-")}
    />
  );
};

// PostHeader.defaultProps = {
//   avatarLetter: "R",
//   title: "Shrimp and Chorizo Paella",
//   postDate: `${new Date()}`,
// };
