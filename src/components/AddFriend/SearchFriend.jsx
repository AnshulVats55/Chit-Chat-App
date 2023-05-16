import React, { useState ,useEffect } from "react";
import { Paper, IconButton, Box, Avatar, Typography } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { ListStyles } from "../FriendList/FriendList.styles";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import { useSelector } from "react-redux";
import { socket } from "../../pages/CommonLayout/CommonLayout";
import { useToast } from "@chakra-ui/react";
import { allUSers } from "../../api/services/FriendRequestApi";
import DisplayAlert from "../AlertBox/DisplayAlert";
import {changeDisplayState} from "../../store/slices/DisplayAlertSlice";
import { useDispatch } from "react-redux";

const SearchFriend = () => {
  const { classes } = ListStyles();
  const [serchedUser, setSearchedUSer] = useState([]);
  const [search, setSearch] = useState("");

  const toast = useToast();
  const [showAlertToast,setshowAlertToast] = useState({visiblity: false, message: "", status: "Success | Error |info"});
  // console.log(showAlertToast)
  const dispatch = useDispatch();
 useEffect(() => {
    if (showAlertToast.visiblity === true) {
      //console.log("under use effect-------------",showAlertToast)
      dispatch((changeDisplayState(showAlertToast)))
      setTimeout(()=>{
        setshowAlertToast({visiblity: false, message: ""});
      },2000);       
    }
}, [showAlertToast]);

  const userDetails = useSelector((state) => {
    return state.userDataReducer[0];
  });
  const userId = userDetails?.data?.user.id;

  const ff = useSelector((state) => {
    return state.FriendsDataReducer;
  });
  
 

  const addFriend = (id) => {
    socket.emit("addFriend", { followerUserId: userId, followedUserId: id });
    // toast({
    //   title: "Friend Request Sent Succesfully !",
    //   position: "top",
    //   description: "",
    //   status: "success",
    //   duration: 2000,
    //   isClosable: true,
    // });
    setshowAlertToast({visiblity: true, message:"Friend Request Sent Succesfully !", status:"success"}) 

  };
 

  const searchHandler = async () => {

    const users = await allUSers();
    setSearchedUSer(users);
  };

  return (
    <Box className={classes.searchFriendContStyles}>
     {showAlertToast?.visiblity &&  <DisplayAlert />}

      <Typography variant="h6" className={classes.heading}>
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
            }
            else if (
              (val.firstName.toLowerCase().startsWith(search.toLowerCase()) ||
                val.lastName.toLowerCase().startsWith(search.toLowerCase())) &&
              val.id !== userId
            ) {
              const index = ff.findIndex((element) => {
                return element.id === val.id;
              });

              if (index === -1) return val;
              else return null;
            }
            else {
              return null;
            }
          })
          .map((s) => {
            const { id, firstName, lastName, profilePicture } = s;
            return (
              <Box className={classes.single} key={id}>
                <Box className={classes.single1}>
                  <Avatar
                    className={classes.avatar}
                    alt=""
                    src={profilePicture}
                  ></Avatar>
                  <Typography sx={{ marginTop: "6px" }} variant="body1">
                    {firstName + " " + lastName}
                  </Typography>
                  <IconButton onClick={() => addFriend(id)}>
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
