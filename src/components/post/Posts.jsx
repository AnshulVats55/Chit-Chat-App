import React, { useEffect, useState, useRef, createContext, useContext } from "react";
import { Box, Grid  } from "@mui/material";
import { PostStyles } from "./post.styles";

import Post from "./Post";
import CreatePost from "./createPost/CreatePost";
import postApi from "../../api/postApi";
import { useToast } from '@chakra-ui/react';

const PostContext = createContext();

export const Posts = () => {
  const { classes } = PostStyles();
  const { getPosts, createPost, deletePost } = postApi();

  const toast = useToast();
  const [posts, setPosts] = useState([]);

  const [userName, setUserName] = useState("Hello");
  
  useEffect(() => {
    let getAllPosts = async () => {
      let response = await getPosts();
      console.log(response);
      setPosts(response);
    };
    getAllPosts();
  }, []);

  const handleCreatePost = async (postData) => {
    const response = await createPost(postData);
    console.log(response);
    if(response.data.status === "success"){
      let newPosts = [response.data.data, ...posts];
      setPosts(newPosts);
      toast({
          title: "Post created successfully !",
          position:'top',
          description: "",
          status: 'success',
          duration: 1000,
          isClosable: true,
      });
    }
    else{
      toast({
        title: "Error creating post !",
        position:'top',
        description: "",
        status: 'error',
        duration: 1000,
        isClosable: true,
    });
    }
  };

  const handleDeletePost = async (id) => {

      if(window.confirm("Do you really want to delete this post?") == true){
        const response = await deletePost(id);
        if(response.data.status == "success"){
         let updatedPosts = posts.filter(post => post.id !== id);
         setPosts(updatedPosts)
          toast({
            title: "Post deleted successfully !",
            position:'top',
            description: "",
            status: 'success',
            duration: 1000,
            isClosable: true,
        });
        }
      }
    else{
      toast({
        title: "Post deletion revoked !",
        position:'top',
        description: "",
        status: 'info',
        duration: 1000,
        isClosable: true,
    });
    }
  }

  return (
    <PostContext.Provider  value = {{handleDeletePost, userName}} > 
      <Box className={classes.PostsTopContStyles}>
        <CreatePost createPost={handleCreatePost} />
        <Grid container spacing={2} className={classes.gridContainerStyles}>
          {posts?.map((post) => {
            return (
              <Grid className={classes.gridItemStyles} item lg={12} md={12} sm={12} xs={12}>
                <Post key={post.id} post={post}/>
              </Grid>
            );
          })}
        </Grid>
      </Box>
    </PostContext.Provider>
  );
};

export default PostContext;