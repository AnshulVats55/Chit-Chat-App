import React, { useState,useEffect } from "react";
import { Paper, IconButton, Box, Avatar, Typography } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { ListStyles } from "../FriendList/FriendList.styles";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import { useSelector } from "react-redux";
import { socket } from "../../pages/CommonLayout/CommonLayout";
import { allUSers } from "../../api/services/FriendRequestApi";
import { setSnackbar } from "../../store/slices/SnackBarSlice";
import message from "../../Constants";
import { useDispatch } from "react-redux";
import { getFriends } from "../../api/services/FriendsListApi";


const SearchFriend = () => {
  const { classes } = ListStyles();
  const [serchedUser, setSearchedUSer] = useState([]);
  const[friends,setFriends] = useState([])
  const [search, setSearch] = useState("");
  const dispatch = useDispatch();
  const userDetails = useSelector((state) => {
    return state.userDataReducer[0];
  });
  const userId = userDetails?.data?.user.id;
  
  useEffect(() => {
    const allFriends = async () => {
      const friend = await getFriends(userId);
      setFriends(friend)
    };
    allFriends();
  }, [userId]);


  const addFriend = (id) => {
    socket.emit("addFriend", { followerUserId: userId, followedUserId: id });
    dispatch(
      setSnackbar({
        snackbarOpen: true,
        snackbarType: message.SUCCESS,
        snackbarMessage: "Friend Request Sent Succesfully !",
      })
    );
    let h = serchedUser.filter((h)=>h.id !== id)
    setSearchedUSer(h);

 
  };

  const searchHandler = async () => {
    const users = await allUSers(userId);
    setSearchedUSer(users);
  };

  return (
    <Box className={classes.searchFriendContStyles}>
      <Typography variant="h6" className={classes.friendRequestText}>
        Add New Friends
      </Typography>
      <Paper component="form" className={classes.searchContainer}>
        <input
          className={classes.searchBar}
          placeholder="Start making friends..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          onKeyUp={searchHandler}
        />
        <IconButton type="button" className={classes.icon} aria-label="search">
          <SearchIcon />
        </IconButton>
      </Paper>
      <Box className={classes.friendContainer}>
        {serchedUser

          ?.filter((val) => {
            if (search === "") {
              return null;
            } else if (
              (val.firstName.toLowerCase().startsWith(search.toLowerCase()) ||
                val.lastName.toLowerCase().startsWith(search.toLowerCase())) &&
              val.id !== userId
            ) {
              if (friends?.followers.length > 0) {
                const index = friends?.followers.findIndex((element) => {
                  return element.id === val.id;
                });

                if (index === -1) {
                  return val;
                }
              } else {
                return val;
              }
            }
            return null;
          })

          .map((s) => {
            const { id, firstName, lastName, profilePicture } = s;
            return (
              <Box className={classes.single} key={id}>
                <Box className={classes.single2}>
                  <Box sx={{display:"flex"}}> 
                     <Avatar
                    className={classes.avatar}
                    alt=""
                    src={profilePicture}
                  ></Avatar>
                  <Typography sx={{ marginTop: "6px" }} variant="body1">
                    {firstName + " " + lastName}
                  </Typography>
                  </Box>
                
                  
                  <IconButton  onClick={() => addFriend(id)}>
                    <PersonAddIcon />
                  </IconButton>
                </Box>
              </Box>
            );
          })}
      </Box>
    </Box>
  );
};

export default SearchFriend;
