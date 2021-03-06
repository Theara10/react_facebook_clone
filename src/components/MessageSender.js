import { Avatar } from "@material-ui/core";
import React, { useState } from "react";
import "./MessageSender.css";
import VideocamIcon from "@material-ui/icons/Videocam";
import PhotoLibraryIcon from "@material-ui/icons/PhotoLibrary";
import InsertEmoticonIcon from "@material-ui/icons/InsertEmoticon";

function MessageSender() {
  const [input, setInput] = useState("");
  const [image, setImage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    setInput("");
    setImage("");
  };

  return (
    <div className="messageSender">
      <div className="messageSender_top">
        <Avatar />
        <form>
          <input
            className="messageSender_input"
            placeholder="What's on your mind?"
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
          <input
            placeholder="Image URL (Optional)"
            value={image}
            onChange={(e) => setImage(e.target.value)}
          />
          <button onClick={handleSubmit} type="submit">
            Hidden Submit
          </button>
        </form>
      </div>
      <div className="messageSender_bottom">
        <div className="messageSender_option">
          <VideocamIcon style={{ color: "red" }} />
          <h3>Live Video</h3>
        </div>
        <div className="messageSender_option">
          <PhotoLibraryIcon style={{ color: "green" }} />
          <h3>Photo/Video</h3>
        </div>
        <div className="messageSender_option">
          <InsertEmoticonIcon style={{ color: "orange" }} />
          <h3>Feeling/Activities</h3>
        </div>
      </div>
    </div>
  );
}

export default MessageSender;
