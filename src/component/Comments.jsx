import { collection, doc, onSnapshot } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import db from "../firebase";

function Comments({ posts_id }) {
  const [comments, setcomments] = useState([]);

  useEffect(() => {         // fetching comments from database 
    if (posts_id) {
      const postspath = doc(db, "posts", posts_id);
      const commentspath = collection(postspath, "comments");
      const unsubceribe = onSnapshot(commentspath, (snapshot) => {
        setcomments(
          snapshot.docs.map((cmnt) => {
            return cmnt.data();
          })
        );
      });
      return () => {
        unsubceribe();
      };
    }
  }, [posts_id]);

  console.log(comments);  // to see if the useEffcet is doing read operations infinitly

  const post_cmmnt_handler = (e) => {
           e.preventDefault()
  }

  return (
    <div className="w-[100%] h-[auto]  text-white px-2">
      <div id="comments" className="bg-slate-500 px-2">
        {comments.map((comment, index) => (
          <h1 key={index} className="flex "> {/* comments from database*/}
            {comment.comment}
          </h1>
        ))}
      </div>
      <div
        id="commentwriting pad send button"
        className="flex w-[auto] rounded-2xl"
      >
        <input
          className="w-[100%] bg-gray-400 border-none placeholder-slate-500"
          placeholder="Enter comments here....."
        />
        <button 
        onClick={post_cmmnt_handler}
        className="rounded bg-gray-600 text-white px-6 hover:bg-blue-400 hover:text-gray-600">
          SEND
        </button>
      </div>
    </div>
  );
}

export default Comments;
