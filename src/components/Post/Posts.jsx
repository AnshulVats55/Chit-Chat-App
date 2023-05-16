import React, { useEffect, useState, createContext } from "react";
import { Box, Grid, Typography } from "@mui/material";
import { PostStyles } from "./post.styles";
import Post from "./Post";
import CreatePost from "./createPost/CreatePost";
import postApi from "../../api/services/postApi";
import { useToast } from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";
import {
  getAllPosts,
  setPostData,
  createPostByRedux,
  deletePostById,
} from "../../store/slices/PostDataSlice";

import Request from "../AddFriend/Request";
import NoPostsFound from "../../assets/undraw_not_found_re_bh2e.svg";

const PostContext = createContext();

export const Posts = () => {
  const { classes } = PostStyles();

  const { createPost, deletePost } = postApi();
  const [arePostsAvailable, setArePostsAvailable] = useState(true);
  const toast = useToast();

  const posts = useSelector((state) => {
    return state.postDataReducer;
  });

  const currentUserId = useSelector((state) => {
  
    return state?.userDataReducer[0]?.data?.user.id;
  });
 
  const [userName, setUserName] = useState("");

  const dispatch = useDispatch();

  useEffect(() => {

    let response = dispatch(getAllPosts());
    
    if (response.length === 0) {
      setArePostsAvailable(false);
    }
  }, []);


  const handleCreatePost = async (postData) => {

    const response = await createPost(postData, currentUserId);
    
    if (response.data.status === "success") {
      if(posts.length === 0){
        setArePostsAvailable(true);
      }
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
    if (id !== "") {
      const response = await deletePost(id);
      if (response.data.status == "success") {
        if(posts.length === 1){
          setArePostsAvailable(false);
        }
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
    }
    else {
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
        <Grid container className={classes.postContStyles}>
          <Grid item xs={12} className={classes.postContItemStyles}>
            <CreatePost createPost={handleCreatePost} />
          </Grid>



              <Grid item xs={12} className={classes.postContItemStyles}>
                {
                  arePostsAvailable
                  ?
                  <Grid container spacing={2} className={classes.gridContainerStyles}>
                  {
                    posts?.map((post) => {
                      return (
                        <>
                        <Grid
                          className={classes.gridItemStyles}
                          item
                          xs={10}
                          key={post.id}
                        >
                          <Post post={post} postCreatorId={post.userId} />
                        </Grid>
                        </>
                      );
                  })}
                  </Grid>
                  :
                  <Box className={classes.noPostsFoundContStyles}>
                    <Typography variant="body2" className={classes.noPostFoundTextStyles}>OOPS ! There are no posts.</Typography>
                    <img src={NoPostsFound} alt="" className={classes.noPostsFoundImageStyles}/>
                  </Box>
                }

              </Grid>
            ) : (
              <Box className={classes.noPostsFoundContStyles}>
                <Typography
                  variant="body2"
                  className={classes.noPostFoundTextStyles}
                >
                  No posts found
                </Typography>
                <img
                  src={NoPostsFound}
                  alt=""
                  className={classes.noPostsFoundImageStyles}
                />
              </Box>
            )}
          </Grid>
        </Grid>

        <Grid container className={classes.friendReqGridStyles}>
          <Grid item xs={12} className={classes.friendReqGridItemStyles}>
            <Request />
          </Grid>
        </Grid>
      </Box>
    </PostContext.Provider>
  );
};

export default PostContext;
