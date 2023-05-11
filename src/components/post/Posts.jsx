import React, { useEffect, useState, createContext } from "react";
import { Box, Grid } from "@mui/material";
import { PostStyles } from "./post.styles";
import Post from "./Post";
import CreatePost from "./createPost/CreatePost";
import postApi from "../../api/postApi";
import { useToast } from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";
import { setPostData, createPostByRedux, deletePostById } from "../../store/slices/PostDataSlice";
import { setPostCurrentLikes, resetInitialState } from '../../store/slices/LikeSlice';
import { setUserComments, resetCommentInitialState } from '../../store/slices/CommentSlice';
import Request from "../addFriend/Request";
import DisplayAlert from "../AlertBox/DisplayAlert";
import {changeDisplayState} from "../../store/slices/DisplayAlertSlice";

const PostContext = createContext();

export const Posts = () => {
  const { classes } = PostStyles();
  const { getPosts, createPost, deletePost } = postApi();
  const toast = useToast();
  
  const [userName, setUserName] = useState("");

  const posts = useSelector((state) => {
    return state.postDataReducer;
  });

  //access data
  const dispatch = useDispatch();
  const alertData = useSelector((state) => {
    console.log(state.displayAlertReducer)
    return state.displayAlertReducer;
  })
   
  const [showAlertToast,setshowAlertToast] = useState({visiblity: false, message: "", status: "Success | Error |info"});
  console.log(showAlertToast)
 
 useEffect(() => {
    if (showAlertToast.visiblity === true) {
      console.log("under use effect-------------",showAlertToast)
      dispatch((changeDisplayState(showAlertToast)))
      setTimeout(()=>{
        setshowAlertToast({visiblity: false, message: ""});
      },1000);       
    }
}, [showAlertToast]);

  useEffect(() => {
      let getAllPosts = async () => {
      let response = await getPosts();
      console.log(response);
      dispatch(setPostData(response));
      dispatch(resetInitialState());
      dispatch(resetCommentInitialState());
      response.map((post)=>{
        console.log(post)
        dispatch(setPostCurrentLikes({postId:post.id, currentLikesCount: post.likes.length, usersWhoLiked: post.likes}));
        dispatch(setUserComments({postId: post.id, currentCommentsCount: post.comments.length, usersWhoCommented: post.comments}));
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
      // toast({
      //   title: "Post created successfully !",
      //   position: "top",
      //   description: "",
      //   status: "success",
      //   duration: 1000,
      //   isClosable: true,
      // });
      setshowAlertToast({visiblity: true, message:"Post Created  Successfully!", status:"success"}) 
    } else {
      // toast({
      //   title: "Error creating post !",
      //   position: "top",
      //   description: "",
      //   status: "error",
      //   duration: 1000,
      //   isClosable: true,
      // });
      setshowAlertToast({visiblity: true, message:"Error Creating POst", status:"error"}) 
    }
  };
 let deleteToast;
  const handleDeletePost = async (id) => {
    if (id !== ''){
      const response = await deletePost(id);
      if (response.data.status == "success") {
        dispatch(deletePostById(id));
        // toast({
        //   title: "Post deleted successfully !",
        //   position: "top",
        //   description: "",
        //   status: "success",
        //   duration: 1000,
        //   isClosable: true,
        // });
        setshowAlertToast({visiblity: true, message:"Deleted Successfully!", status:"success"})  

      }
    } else {
      // toast({
      //   title: "Post deletion revoked !",
      //   position: "top",
      //   description: "",
      //   status: "info",
      //   duration: 1000,
      //   isClosable: true,
      // });
      console.log("Post deletion revoked!");
      setshowAlertToast({visiblity: true, message:"Deletion revoked!", status:"error"}) 
    }
  };

  return (
    <PostContext.Provider value={{ handleDeletePost, userName }}>
  
      {showAlertToast?.visiblity &&  <DisplayAlert message={alertData.message} status={alertData.status}/>}

      <Box className={classes.PostsTopContStyles}>

        <Grid container className={classes.postContStyles}>
          <Grid item lg={10} md={10} sm={10} xs={10}>
            <CreatePost createPost={handleCreatePost} />
            <Grid container spacing={2} className={classes.gridContainerStyles}>
              {
              posts?.map((post) => {
                return (
                  <>
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
                  </>
                );
              })}
            </Grid>
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
