import { collection, doc, onSnapshot } from 'firebase/firestore'
import React, { useEffect, useState } from 'react'
import db from '../firebase'

function Comments({posts_id}) {
  
  const[comments,setcomments] = useState([])  

  useEffect(() => {
   if(posts_id){
   const postspath = doc(db,'posts',posts_id)
   const commentspath = collection(postspath,'comments')
   const unsubceribe = onSnapshot(commentspath,(snapshot) => {
     setcomments(
        snapshot.docs.map((cmnt) => {
            return cmnt.data()} )
     )
   })
   return () => {
      unsubceribe()
   }}
  },[posts_id])

  return (
    <div className='w-[100%] bg-slate-500'>
       {comments.map((comment, index) => (
      <h1 key={index}>{comment.comment}</h1>
    ))}
      <input 
      className='w-[100%] bg-gray-400 border-none placeholder-slate-500'
      placeholder='Enter comments.....'/>
      
    </div>
  )
}

export default Comments
