import React from "react";
import Avatar from "@mui/material/Avatar";

function Posts() {
  return (
    <div className="bg-transparent flex flex-col max-h-[600px] max-w-[700px] border border-white rounded-3xl ml-7 p-2">
      <div className="flex gap-3">
        <Avatar alt="Ayan M" src="/static/images/avatar/1.jpg" />
        <h3 className="text-white flex bg-transparent "> username </h3>
      </div>

      <img
        src="https://i.pinimg.com/736x/8e/8f/57/8e8f57433c0bed3b925e1579fa0378b7.jpg"
        alt=""
        className="  w-[80%]  h-[80%] object-cover ml-14 bg-transparent rounded-2xl"
      />
      <br/>
      <h3 className="text-white flex bg-transparent ">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Omnis modi natus ipsum, vel molestias aspernatur necessitatibus, repellendus architecto earum deleniti est molestiae quaerat? Rem?
        <strong className="">caption</strong>
      </h3>
    </div>
  );
}

export default Posts;
