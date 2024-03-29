import React, { useEffect, useState } from "react";
import Avatar from "@mui/material/Avatar";
import db from "../firebase";
import { collection, onSnapshot } from "firebase/firestore";

function Posts() {
  const [post_from_db, set_post_from_db] = useState([]);

  useEffect(() => {                            
    const postspath = collection(db, "posts");        // use try , catch
    const unsubcribe = onSnapshot(postspath, (snapshot) => {
      set_post_from_db(
        snapshot.docs.map((doc) => {
         return doc.data();
        })
      );
    });
    return () => {
      unsubcribe();
    };
  }, [post_from_db]);

  return post_from_db.map((post) => 
    
    ( <>
      <div className="bg-transparent flex flex-col max-h-[600px] max-w-[700px] border border-white rounded-3xl ml-7 p-2">
        <div className="flex gap-3">
          <Avatar alt={post.username} src="/static/images/avatar/1.jpg" />
          <h3 className="text-white flex bg-transparent "> {post.username} </h3>
        </div>

        <img
          src={post.image_url}
          alt=""
          className="  w-[80%]  h-[80%] object-cover ml-14 bg-transparent rounded-2xl"
        />
        <br />
        <h3 className="text-white flex bg-transparent ">
          caption :<strong className=""> {post.caption}</strong>
        </h3>
      </div>
      <br/>
      </>
    )
  );
}

export default Posts;
