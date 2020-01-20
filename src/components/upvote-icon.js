import React from 'react'
import PropTypes from 'prop-types'

import './upvote.css'

const UpvoteIcon = ({ id }) => {
  return (
    <div className="article-upvote">
      <a href={`https://news.ycombinator.com/vote?id=${id}&how=up&goto=news`}>^</a>
    </div>
  )
}

UpvoteIcon.propTypes = {
  id: PropTypes.number.isRequired,
}

export { UpvoteIcon }