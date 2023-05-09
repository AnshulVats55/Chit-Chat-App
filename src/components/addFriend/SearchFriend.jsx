import React, { useEffect, useState } from "react";
import { Paper, IconButton, Box, Avatar, Typography } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { ListStyles } from "../friendList/FriendList.styles";
import axios from "axios";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import { useSelector } from "react-redux";
// import { socket } from "../chatWindow/ChatWindow";
import { socket } from "../../pages/FinalLayout/FinalLayout";
import { useToast } from "@chakra-ui/react";

const SearchFriend = () => {

  const toast = useToast();
  const userDetails = useSelector((state) => {
    return state.userDataReducer[0];
  });

  const userId = userDetails.data.user.id;
  const [friends, setFriends] = useState([]);
  const [serchedUser, setSearchedUSer] = useState([]);
  const [search, setSearch] = useState("");
 

  const addFriend = (id) => {
    socket.emit("addFriend", { followerUserId: userId, followedUserId: id });
    toast({
      title: "Friend Request Sent Succesfully !",
      position: "top",
      description: "",
      status: "success",
      duration: 2000,
      isClosable: true,
    });
  
    
  };
  useEffect(() => {
    let config = {
      method: "get",

      maxBodyLength: Infinity,

      url: `http://192.168.1.110:8484/v1/relationship/all/${userId}`,

      headers: {
        token: localStorage.getItem("token"),
      },
    };

    axios
      .request(config)

      .then((response) => {
        console.log(JSON.stringify(response.data.data.followers));
        setFriends(response.data.data.followers);
      })

      .catch((error) => {
        console.log(error);
      });
  }, [userId]);

  const searchHandler = () => {
    let config = {
      method: "get",
      maxBodyLength: Infinity,
      url: `http://192.168.1.110:8484/v1/user`,
      headers: {
        token: localStorage.getItem("token"),
      },
    };

    axios
      .request(config)
      .then((response) => {
        // console.log(JSON.stringify(response.data.data));
        setSearchedUSer(response.data.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <Box className={classes.searchFriendContStyles}>
      <Typography variant="h6" sx={{margin: "0.5rem 0rem", textAlign:'center'}}>Add New Friends</Typography>
      <Paper component="form" className={classes.searchContainer}>
        <input
          className={classes.searchBar}
          placeholder="Search your friends..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          onKeyUp={searchHandler}
        />
        <IconButton type="button" className={classes.icon} aria-label="search">
          <SearchIcon />
        </IconButton>
      </Paper>
      <div style={{height:"100%"}}  className={classes.friendContainer}>
        {serchedUser
          .filter((val) => {
            if (search === "") {
              return null;
            } else if (
              (val.firstName.toLowerCase().startsWith(search.toLowerCase()) ||
                val.lastName.toLowerCase().startsWith(search.toLowerCase())) &&
              val.id !== userId
            ) {
              const index = friends.findIndex((element) => {
                return element.id === val.id;
              });

              if (index === -1) return val;
              else return null;
            } else {
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
                  <Typography sx={{ marginTop: "6px" }} variant="h6">
                    {firstName + " " + lastName}
                  </Typography>
                  <IconButton  onClick={() => addFriend(id)}>
                    <PersonAddIcon />
                  </IconButton>

                  <Box></Box>
                </Box>
              </Box>
            );
          })}
      </div>
    </Box>
  );
};

export default SearchFriend;
