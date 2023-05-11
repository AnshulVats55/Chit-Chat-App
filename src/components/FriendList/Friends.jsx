import React, { useState } from "react";
import { ListStyles } from "./FriendList.styles";
import SingleFriend from "./SingleFriend";
import SearchBar from "./SearchBar";
import { useSelector } from 'react-redux'

const Friends = ({ openChat, friends, changeHandler, setFriends, search }) => {

const Friends = ({ openChat}) => {
  const [search, setSearch] = useState("");
  const { classes } = ListStyles();
  const changeHandler = (e) => {
    setSearch(e.target.value);
  };

  const friendsList = useSelector((state) => {
    return state.FriendsDataReducer;
  });
  console.log(friendsList)

  return (
    <div className={classes.friendGrid}>
      <input type="search" placeholder="Search for friends..." changeHandler={changeHandler} setFriends={setFriends} friends={friends} className={classes.searchFriends} />
      <div className={classes.friendContainer}>
        {friendsList[0]?.followers.filter((val) => {
                    if (search === "") {
                      return val;
                    } else if (
                      val.firstName
                        .toLowerCase()
                        .startsWith(search.toLowerCase()) ||
                      val.lastName
                        .toLowerCase()
                        .startsWith(search.toLowerCase())
                    ) {
                      return val;
                    } else {
                      return null;
                    }
                  })
        .map((detail) => {
          return (
            <SingleFriend
              detail={detail}
              openChat={openChat}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Friends;
