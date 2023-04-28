import React, { useEffect, useState, useRef, createContext, useContext } from "react";
import { Box, Grid, Stack, Container } from "@mui/material";
import { PostStyles } from "./post.styles";
import Post from "./Post";
import CreatePost from "./createPost/CreatePost";
import postOneImage from "../../assets/create-account.jpg";
import postApi from "../../api/postApi";

import birdImage from '../../assets/bird.jpg';
import Image2 from '../../assets/post2.jpg';
import Image3 from '../../assets/post1.jpg';

const PostContext = createContext();

export const Posts = () => {

  const { classes } = PostStyles();

  const { getPosts, createPost,deletePost } = postApi();
  
  let [posts, setPosts] = useState([]);

  useEffect(() => {
    let getAllPosts = async () => {
      let response = await getPosts();
      console.log(response)
      setPosts(response);
    };
    getAllPosts();
  }, []);

  const handleCreatePost = async (postData) => {
    console.log(postData);
    const response = await createPost(postData);
    console.log(response);
    let newPosts = [response.data.data, ...posts];
    setPosts(newPosts);
  };

 const handleDeletePost = async(id)=>{
    const response = await deletePost(id);
 }

//  posts[0] = {
//   body: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem laboriosam voluptate sint, corrupti tempora ex unde praesentium impedit pariatur cupiditate ipsum nisi natus ab similique eveniet in, dicta sit voluptatem!",
//   attachment: birdImage,
//  }

//  posts[1] = {
//   body: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem laboriosam voluptate sint, corrupti tempora ex unde praesentium impedit pariatur cupiditate ipsum nisi natus ab similique eveniet in, dicta sit voluptatem!",
//   attachment: Image2,
//  }

//  posts[2] = {
//   body: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem laboriosam voluptate sint, corrupti tempora ex unde praesentium impedit pariatur cupiditate ipsum nisi natus ab similique eveniet in, dicta sit voluptatem!",
//   attachment: Image3,
//  }

  return (
    <PostContext.Provider value={{posts, handleDeletePost}} >
      <Container maxWidth="xl" className={classes.mainContainer}>
        <Box className={classes.PostsTopContStyles}>
          <CreatePost createPost={handleCreatePost} />
          <Grid container className={classes.gridContainerStyles}>
            {posts?.map((gridItem) => {
              return (
                <Grid item lg={12} md={12} sm={12} xs={12} className={classes.gridItemStyles}>
                  <Post image={gridItem.attachment} content={gridItem.body} />
                </Grid>
              );
            })}
          </Grid>
        </Box>
      </Container>
    </PostContext.Provider>
  );
};

export default PostContext;