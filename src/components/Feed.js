import React from "react";
import "./Feed.css";
import StoryReel from "./StoryReel";
import MessageSender from "./MessageSender";
import { Post } from "./Post";

function Feed() {
  return (
    <div className="feed">
      <StoryReel />
      <MessageSender />
      <Post
        profilePic="https://www.indiewire.com/wp-content/uploads/2020/08/batman.png"
        message="Wow this works"
        username="theara"
        timestamp="This is a timestamp"
        image="https://static2.cbrimages.com/wordpress/wp-content/uploads/2020/12/batman-ghostmaker.jpg?q=50&fit=crop&w=960&h=500&dpr=1.5"
      />
      <Post />
      <Post />
    </div>
  );
}

export default Feed;
