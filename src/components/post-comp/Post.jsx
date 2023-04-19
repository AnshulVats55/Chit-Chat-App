import React from "react";
import post1 from "../assets/images/post-1.jpg";
import {
  Avatar,
  Box,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  Checkbox,
  IconButton,
  Typography,
} from "@mui/material";

import CommentIcon from "@mui/icons-material/Comment";
import MoreVertIcon from "@mui/icons-material/MoreVert";

import { AspectRatio, Favorite, FavoriteBorder } from "@mui/icons-material";

export const Post = ({avatarLetter,title,postDate,image,content}) => {
  return (
    <Card  sx={{ m: 5 ,width:"500px"}}>
      <CardHeader 
        avatar={
          <Avatar sx={{ bgcolor: "red" }} aria-label="recipe">
            {avatarLetter}
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title={title}
        subheader={postDate}
      />

      <CardMedia
        sx={{ maxWidth: "100%", height:'10%'}}
        component="img"
        //   image="https://img.freepik.com/free-photo/wide-angle-shot-single-tree-growing-clouded-sky-during-sunset-surrounded-by-grass_181624-22807.jpg"
        image={image}
        alt="first post"
      />

      <CardContent>
        <Typography variant="body2" >
         {content}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <Checkbox
            icon={<FavoriteBorder />}
            checkedIcon={<Favorite sx={{ color: "red" }} />}
          />
        </IconButton>
        <IconButton aria-label="comment">
          <CommentIcon />
        </IconButton>
      </CardActions>
    </Card>
  );
};

Post.defaultProps ={
    avatarLetter : 'R',
    title : "Shrimp and Chorizo Paella",
    postDate:"September 14, 2016",
    image:post1,
    content: "This impressive paella is a perfect party dish and a fun meal to cook together with your guests. Add 1 cup of frozen peas along with the mussels, if you like."

}
