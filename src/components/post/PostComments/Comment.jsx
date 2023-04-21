import { Avatar } from '@mui/material'
import React from 'react'
 
export const Comment = ({comment,replies}) => {
  return (
    <div className='comment'>
        <div className="comment-image-container">
        <Avatar  aria-label="recipe">
            R
        </Avatar>
        </div> 
        <div className="comment-right-part">
            <div className="comment-content">
                <div className="comment-author">{comment.username}</div>
                <div>{comment.createdAt}</div>         
            </div>
            <div className="comment-text">{comment.body}</div>
            {
                replies.length>0 && (
                    <div className='replies'>
                    {replies.map((reply)=>(
                        <Comment key={reply.id} comment={reply}  replies={[]}/>
                    ))}
                    </div>
                )
            }
        </div>
    </div>
  )
}
