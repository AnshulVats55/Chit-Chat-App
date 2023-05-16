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
import DisplayAlert from "../AlertBox/DisplayAlert";
import {changeDisplayState} from "../../store/slices/DisplayAlertSlice";
import NoPostsFound from '../../assets/undraw_not_found_re_bh2e.svg';

const PostContext = createContext();

export const Posts = () => {
  const { classes } = PostStyles();
  const { getPosts, createPost, deletePost } = postApi();
  const [arePostsAvailable, setArePostsAvailable] = useState(true);
  const toast = useToast();
  
  const [userName, setUserName] = useState("");

  const posts = useSelector((state) => {
    return state.postDataReducer;
  });

  const currentUserId = useSelector((state) => {
    return state?.userDataReducer[0]?.data?.user.id;
  });

  const dispatch = useDispatch();
  const [showAlertToast,setshowAlertToast] = useState({visiblity: false, message: "", status: "Success | Error |info"});
 
  useEffect(() => {
      if (showAlertToast.visiblity === true) {
        dispatch((changeDisplayState(showAlertToast)))
        setTimeout(()=>{
          setshowAlertToast({visiblity: false, message: ""});
        },1000);       
      }
  }, [showAlertToast]);

  useEffect(() => {
    let response = dispatch(getAllPosts());
    if (response.length === 0) {
      setArePostsAvailable(false);
    }
  }, []);

  const handleCreatePost = async (postData) => {

    if (response?.data?.status === "success") {
      dispatch(createPostByRedux(response.data.data));
      setshowAlertToast({visiblity: true, message:"Post Created  Successfully !", status:"success"});
    }
    else {
      setshowAlertToast({visiblity: true, message:"Error creating post !", status:"error"});
    }
  };

 let deleteToast;
  const handleDeletePost = async (id) => {
    if (id !== "") {
      const response = await deletePost(id);
      if (response.data.status == "success") {
        if(posts.length === 1){
          setArePostsAvailable(false);
        }
        dispatch(deletePostById(id));
        setshowAlertToast({visiblity: true, message:"Deleted Successfully!", status:"success"});

      }
    }
    else {
      setshowAlertToast({visiblity: true, message:"Deletion revoked!", status:"error"}) 
    }
  };

  return (
    <PostContext.Provider value={{ handleDeletePost, userName }}>
  
      {showAlertToast?.visiblity &&  <DisplayAlert />}

      <Box className={classes.PostsTopContStyles}>
        <Grid container className={classes.postContStyles}>
          <Grid item xs={12} className={classes.postContItemStyles}>
            <CreatePost createPost={handleCreatePost} />
          </Grid>

          <Grid item xs={12} className={classes.postContItemStyles}>
            {arePostsAvailable ? (
              <Grid
                container
                spacing={2}
                className={classes.gridContainerStyles}
              >
                {posts?.map((post) => {
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
