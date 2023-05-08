import React, { useEffect, useState, createContext } from "react";
import { Box, Grid, Container } from "@mui/material";

import { PostStyles } from "./post.styles";
import Post from "./Post";
import CreatePost from "./createPost/CreatePost";
import postApi from "../../api/postApi";

import { useToast } from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";
import { setPostData, createPostByRedux, deletePostById } from "../../store/slices/PostDataSlice";
import { setPostCurrentLikes, resetInitialState } from '../../store/slices/LikeSlice';

const PostContext = createContext();

export const Posts = () => {
  const { classes } = PostStyles();

  const { getPosts, createPost, deletePost } = postApi();
  const toast = useToast();

  const posts = useSelector((state) => {
    return state.postDataReducer;
  });

  const [userName, setUserName] = useState("");

  const dispatch = useDispatch();

  useEffect(() => {
    let getAllPosts = async () => {
      let response = await getPosts();
      console.log(response);
      dispatch(setPostData(response));
      dispatch(resetInitialState());
      response.map((post)=>{
        console.log(post)
        dispatch(setPostCurrentLikes({postId:post.id, currentLikesCount: post.likes.length, usersWhoLiked: post.likes}));
      });
    };
    getAllPosts();
    
  }, []);

  const handleCreatePost = async (postData) => {
    const response = await createPost(postData);
    console.log(response.data);
    if (response.data.status === "success") {
      console.log(response);
      dispatch(createPostByRedux(response.data.data));
      toast({
        title: "Post created successfully !",
        position: "top",
        description: "",
        status: "success",
        duration: 1000,
        isClosable: true,
      });
    } else {
      toast({
        title: "Error creating post !",
        position: "top",
        description: "",
        status: "error",
        duration: 1000,
        isClosable: true,
      });
    }
  };

  const handleDeletePost = async (id) => {
    if (id !== ''){
      const response = await deletePost(id);
      if (response.data.status == "success") {
        dispatch(deletePostById(id));
        toast({
          title: "Post deleted successfully !",
          position: "top",
          description: "",
          status: "success",
          duration: 1000,
          isClosable: true,
        });
      }
    } else {
      toast({
        title: "Post deletion revoked !",
        position: "top",
        description: "",
        status: "info",
        duration: 1000,
        isClosable: true,
      });
    }
  };

  return (
    <PostContext.Provider value={{ handleDeletePost, userName }}>
      <Box className={classes.PostsTopContStyles}>
        <Container maxWidth="xl" className={classes.postContStyles}>
          <CreatePost createPost={handleCreatePost} />
          <Grid container spacing={2} className={classes.gridContainerStyles}>
            {posts?.map((post) => {
              return (
                <Grid
                  className={classes.gridItemStyles}
                  item
                  lg={12}
                  md={12}
                  sm={12}
                  xs={12}
                  key={post.id}
                >
                  <Post post={post} postCreatorId={post.userId} />
                </Grid>
              );
            })}
          </Grid>
        </Container>
      </Box>
    </PostContext.Provider>
  );
};

export default PostContext;
