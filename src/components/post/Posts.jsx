import React, { useEffect, useState, useRef, createContext, useContext } from "react";

import { Box, Grid, Stack } from "@mui/material";
import { PostStyles } from "./post.styles";
import Post from "./Post";

import CreatePost from "./createPost/CreatePost";
import postOneImage from "../../assets/create-account.jpg";
import postApi from "../../api/postApi";


const PostContext = createContext();
export const Posts = () => {
  const { classes } = PostStyles();
  const { getPosts, createPost,deletePost } = postApi();
  const [posts, setPosts] = useState([]);



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



  return (
    <PostContext.Provider  value = {{posts,handleDeletePost}} >    
      <Box>
        <CreatePost createPost={handleCreatePost} />
        <Grid container spacing={2} className={classes.gridContainerStyles}>
          {posts?.map((gridItem) => {
            return (
              <Grid item lg={4} md={6} sm={12} xs={12}>
                <Post image={gridItem.attachment} content={gridItem.body} />
              </Grid>
            );
          })}
        </Grid>
      </Box>
    </PostContext.Provider>
  );
};

export default PostContext;