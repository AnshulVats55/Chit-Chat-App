import React, { useEffect, useState, useRef, createContext, useContext } from "react";
import { Box, Grid, Stack, Container } from "@mui/material";
import { PostStyles } from "./post.styles";
import Post from "./Post";
import CreatePost from "./createPost/CreatePost";
import postOneImage from "../../assets/create-account.jpg";
import postApi from "../../api/postApi";
import birdImage from '../../../src/assets/bird.jpg';

const PostContext = createContext();

export const Posts = () => {
  const { classes } = PostStyles();
  const { getPosts, createPost,deletePost } = postApi();
  const [posts, setPosts] = useState([
    {
        id: 1,
        body: '1st post',
        attachment:''
    },
    {
        id: 2,
        body: '2nd post',
        attachment:''
    },
    {
        id: 3,
        body: '3rd post',
        attachment:''
    }
  ]);



//   useEffect(() => {
//     let getAllPosts = async () => {
//       let response = await getPosts();
//       console.log(response)
//       setPosts(response);
//     };
//     getAllPosts();
//   }, []);

  const handleCreatePost = async (postData) => {
    console.log(postData);
    const response = await createPost(postData);
    console.log(response);
    let newPosts = [response.data.data, ...posts];
    setPosts(newPosts);
  };

//  const handleDeletePost = async(id)=>{
//     const response = await deletePost(id);
    //    const updatedPosts = posts.filter(post=> post.id!==id)
    //    setPosts(updatedPosts)
//  }
   const handleDeletePost = (id)=>{
       const updatedPosts = posts.filter(post=> post.id!==id)
       setPosts(updatedPosts)
   }
   

 posts[0] = {
  body: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem laboriosam voluptate sint, corrupti tempora ex unde praesentium impedit pariatur cupiditate ipsum nisi natus ab similique eveniet in, dicta sit voluptatem!",
 }
 posts[1] = {
    body: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem laboriosam voluptate sint, corrupti tempora ex unde praesentium impedit pariatur cupiditate ipsum nisi natus ab similique eveniet in, dicta sit voluptatem!",
   }
   posts[2] = {
    body: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem laboriosam voluptate sint, corrupti tempora ex unde praesentium impedit pariatur cupiditate ipsum nisi natus ab similique eveniet in, dicta sit voluptatem!",
   }

  return (
    <PostContext.Provider  value = {{handleDeletePost}} >    
      <Box>
        <CreatePost createPost={handleCreatePost} />
        <Grid container spacing={2} className={classes.gridContainerStyles}>
          {posts?.map((post) => {
            return (
              <Grid item lg={4} md={6} sm={12} xs={12}>
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