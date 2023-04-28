import { Avatar, CardHeader, IconButton } from "@mui/material";
import React,{useContext} from "react";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { PostHeaderStyles } from "./postHead.styles";
import { Name } from "./Name/Name";
import { Dates } from "./Dates/Dates";
import DeleteIcon from '@mui/icons-material/Delete';
import PostContext from "../Posts";

export const PostHeader = ({ avatarLetter, title, postDate, styles}) => {
  const { classes } = PostHeaderStyles(styles);

 
  const value = useContext(PostContext)
  return (
    <CardHeader
      avatar={<Avatar aria-label="recipe">{avatarLetter}</Avatar>}
      action={
        <IconButton aria-label="settings" onClick={()=>{console.log(1);}}>
          <DeleteIcon />
        </IconButton>
      }
      title={<Name />}
      subheader={<Dates />}
    />
  );
};

PostHeader.defaultProps = {
  avatarLetter: "R",
  title: "Shrimp and Chorizo Paella",
  postDate: `${new Date()}`,
};
