import React from "react";
import { ListStyles } from "./FriendList.styles";
import SingleFriend from "./SingleFriend";
import SearchBar from "./SearchBar";

const Friends = ({ openChat, friends, changeHandler, setFriends, search }) => {

  const { classes } = ListStyles();

  return (
    <div className={classes.friendGrid}>
      <input type="search" placeholder="Search for friends..." changeHandler={changeHandler} setFriends={setFriends} friends={friends} className={classes.searchFriends} />
      <div className={classes.friendContainer}>
        {friends.followers?.filter((val) => {
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
