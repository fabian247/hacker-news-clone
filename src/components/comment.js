import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import ReactHtmlParser from 'react-html-parser'

import { getItem } from '../calls/get-item'
import { isObjectEmpty } from '../helper/helper'

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
  if (!isObjectEmpty(comment)) {
    return (
      <div className="comment-container">
        <div className="comment-title">
          <UpvoteIcon id={id}/>
          <By time={comment.time} by={comment.by}/>
        </div>
        <div className="comment-text">
          {ReactHtmlParser(comment.text)}
        </div>
        <div className="comment-reply-link">
          <a href="reply">reply</a>
        </div>
        <div className="comment-kids">
          {comment.kids && comment.kids.map(kid => <Comment key={kid} id={kid}/>)}
        </div>
      </div>
    )
  }

  return null
}

Comment.propTypes = {
  id: PropTypes.number.isRequired,
}

export { Comment }
