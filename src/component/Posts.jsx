import React, { useEffect, useState } from "react";
import Avatar from "@mui/material/Avatar";
import db from "../firebase";
import { collection, onSnapshot, orderBy, query } from "firebase/firestore";
import Comments from './Comments'

function Posts() {
  const [post_from_db, set_post_from_db] = useState([]);

  useEffect(() => {                            
    const postspath = collection(db, "posts");        // use try , catch
    const ordered_posts = query(postspath, orderBy('timestamp','desc'))
    const unsubcribe = onSnapshot(ordered_posts, (snapshot) => {
      set_post_from_db(
        snapshot.docs.map((doc) => {
         return {
          post: doc.data(),
          id : doc.id} ;           // had to create an object to store the doc.id in id and data in post (if there were no id to fetch from then  no need to create an object )
        })
      );
    });
    return () => {
      unsubcribe();
    };
  }, []);  // didn't give any dependencies because for this the useEffect will run read operations infinitely to FB and for this action will end the daily read operation quota and the app will break down

  console.log('images from db',post_from_db); // checking if the useEffcet performing read operations infinitely


  return post_from_db.map(({post,id}) => 
    
    ( <div key={id}>
      <div className="bg-gray-400 flex flex-col max-h-[auto] max-w-[800px] border border-white rounded-3xl ml-7 p-2 shadow-lg shadow-gray-700">
        <div className="flex gap-3">
          <Avatar alt={post.username} src="/static/images/avatar/1.jpg" />
          <h3 className="text-gray-600 flex bg-transparent "> {post.username} </h3>
        </div>

        <img
          src={post.image_url}
          alt=""
          className="  w-[80%]  h-[80%] object-cover ml-14 bg-transparent rounded-2xl shadow-lg shadow-gray-600"
        />
        <br />
        <h3 className="text-gray-600 flex bg-transparent ">
          caption :<strong className=""> {post.caption}</strong>
        </h3>
        <br></br>
        <Comments posts_id ={id}/>
      </div>
      <br/>
      </div>
    )
  );
}

export default Posts;
