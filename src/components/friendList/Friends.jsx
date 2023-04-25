import React from "react";
import { ListStyles } from "./FriendList.styles";
import SingleFriend from "./SingleFriend";
import SearchBar from "./SearchBar";

const date = new Date();

const details = [
  {
    image:
      "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwallpapers.com%2Fhd&psig=AOvVaw3664PYYDpqdzRSYGrx_uD7&ust=1682072576535000&source=images&cd=vfe&ved=0CBEQjRxqFwoTCPjn3-SeuP4CFQAAAAAdAAAAABAE",
    userName: "ansul",
    message: "hello i am dev how you doing",
    time: `${date.getHours()}`,
    id: 1,
  },
  {
    image:
      "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwallpapers.com%2Fhd&psig=AOvVaw3664PYYDpqdzRSYGrx_uD7&ust=1682072576535000&source=images&cd=vfe&ved=0CBEQjRxqFwoTCPjn3-SeuP4CFQAAAAAdAAAAABAE",
    userName: "sakshi",
    message:
      "hello user how are hhhhh dheeeeeeeeeeeeeeeee hedddddddddddddddddd  hdhedeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee you  ",
    time: `${date.getHours()}`,
    id: 2,
  },
  {
    image:
      "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwallpapers.com%2Fhd&psig=AOvVaw3664PYYDpqdzRSYGrx_uD7&ust=1682072576535000&source=images&cd=vfe&ved=0CBEQjRxqFwoTCPjn3-SeuP4CFQAAAAAdAAAAABAE",
    userName: "piyush",
    message: "hello user",
    time: `${date.getHours()}`,
    id: 3,
  },
  {
    image:
      "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwallpapers.com%2Fhd&psig=AOvVaw3664PYYDpqdzRSYGrx_uD7&ust=1682072576535000&source=images&cd=vfe&ved=0CBEQjRxqFwoTCPjn3-SeuP4CFQAAAAAdAAAAABAE",
    userName: "ansul",
    message: "hello user",
    time: `${date.getHours()}`,
    id: 4,
  },
  {
    image:
      "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwallpapers.com%2Fhd&psig=AOvVaw3664PYYDpqdzRSYGrx_uD7&ust=1682072576535000&source=images&cd=vfe&ved=0CBEQjRxqFwoTCPjn3-SeuP4CFQAAAAAdAAAAABAE",
    userName: "ansul",
    message: "hello user",
    time: `${date.getHours()}`,
    id: 4,
  },
  {
    image:
      "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwallpapers.com%2Fhd&psig=AOvVaw3664PYYDpqdzRSYGrx_uD7&ust=1682072576535000&source=images&cd=vfe&ved=0CBEQjRxqFwoTCPjn3-SeuP4CFQAAAAAdAAAAABAE",
    userName: "ansul",
    message: "hello user",
    time: `${date.getHours()}`,
    id: 4,
  },
  {
    image:
      "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwallpapers.com%2Fhd&psig=AOvVaw3664PYYDpqdzRSYGrx_uD7&ust=1682072576535000&source=images&cd=vfe&ved=0CBEQjRxqFwoTCPjn3-SeuP4CFQAAAAAdAAAAABAE",
    userName: "ansul",
    message: "hello user",
    time: `${date.getHours()}`,
    id: 4,
  },
  {
    image:
      "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwallpapers.com%2Fhd&psig=AOvVaw3664PYYDpqdzRSYGrx_uD7&ust=1682072576535000&source=images&cd=vfe&ved=0CBEQjRxqFwoTCPjn3-SeuP4CFQAAAAAdAAAAABAE",
    userName: "ansul",
    message: "hello user",
    time: `${date.getHours()}`,
    id: 4,
  },
  {
    image:
      "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwallpapers.com%2Fhd&psig=AOvVaw3664PYYDpqdzRSYGrx_uD7&ust=1682072576535000&source=images&cd=vfe&ved=0CBEQjRxqFwoTCPjn3-SeuP4CFQAAAAAdAAAAABAE",
    userName: "ansul",
    message: "hello user",
    time: `${date.getHours()}`,
    id: 4,
  },
  {
    image: "jndkjdcnm c ",
    userName: "ansul",
    message: "hello user",
    time: `${date.getMinutes()}`,
    id: 4,
  },
];

const Friends = () => {
  const { classes } = ListStyles();
  return (
    <div className={classes.friendGrid}>
      <SearchBar />
      <div className={classes.friendContainer}>
        {details.map((detail) => {
          return <SingleFriend detail={detail} />;
        })}
      </div>
    </div>
  );
};

export default Friends;
