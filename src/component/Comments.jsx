import { addDoc, collection, doc, onSnapshot, orderBy, query, serverTimestamp } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import db from "../firebase";


function Comments({ posts_id }) {
  const [comments, setcomments] = useState([]);
  const [userComment , setuserComment] = useState("")

  useEffect(() => {         // fetching comments from database 
    if (posts_id) {
      const postspath = doc(db, "posts", posts_id);
      const commentspath = collection(postspath, "comments");
      const ordered_comments = query(commentspath,orderBy('timestamp','desc'))
      const unsubceribe = onSnapshot(ordered_comments, (snapshot) => {
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



  const post_cmmnt_handler = (e) => {   // posting/pushing comments into database
           if(userComment !== ""){
            e.preventDefault()
           const posts_path = doc(db,'posts',posts_id)
           const comments_path = collection(posts_path,"comments")
           addDoc(comments_path,({
             comment: userComment,
             timestamp: serverTimestamp()
           }))

           setuserComment("")
           }
           else{
            alert('Please enter a comment to post')
           }
  }

  return (
    <div id="total comment section" className="w-[100%] h-[auto] text-white px-2">
     
      <div id="comments" className="bg-slate-500 px-2 py-1 rounded-3xl ">
        Comments
        {comments.map((comment, index) => (
          <h1 key={index} className="flex bg-gray-600 m-2 rounded-3xl p-2 shadow-md shadow-gray-800"> {/* comments from database*/}
            {comment.comment} <p id="comment's time" className="text-[8px] mt-3 ml-1">{comment.timestamp && comment.timestamp.toDate().
                                                                                     toLocaleString('en-US', { year: 'numeric', month: 'short',
                                                                                      day: 'numeric', hour: 'numeric', minute: 'numeric' })}</p>
            
          </h1>
        ))}
      </div>
      <div
        id="commentwriting pad send button"
        className="flex w-[auto] rounded-2xl"
      >
        <input
          value={userComment}
          onChange={(e) => setuserComment(e.target.value)}
          className="w-[100%] bg-gray-400 border-none placeholder-slate-600 px-1 shadow-md shadow-gray-700"
          placeholder="Enter comments here....."
        />
        <button 
        onClick={post_cmmnt_handler}
        className="rounded bg-gray-600 text-white px-6 hover:bg-blue-400 hover:text-gray-600">
          POST
        </button>
      </div>
    </div>
  );
}

export default Comments;
