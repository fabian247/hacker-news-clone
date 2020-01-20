import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import { getItem } from '../calls/get-item'
import { By } from './by'
import { UpvoteIcon } from './upvote-icon'

import './comment.css'

const Comment = ({ id }) => {

  const [comment, setComment] = useState({})
  useEffect(
    () => {
      async function fetchComment() {
        const comment = await getItem(id)
        setComment(comment)
      }

      fetchComment()
    }, [id],
  )
  return (
    <div className="comment-container">
      <div className="comment-title">
        <UpvoteIcon id={comment.id}/>
        <By time={comment.time} by={comment.by}/>
      </div>
      <div className="comment-text">
        {comment.text}
      </div>
      <div className="comment-reply-link">
        <a href="reply">reply</a>
      </div>
    </div>
  )
}

Comment.propTypes = {
  id: PropTypes.number.isRequired,
}

export { Comment }
