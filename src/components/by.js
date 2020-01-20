import React from 'react'
import moment from 'moment'
import PropTypes from 'prop-types'

import './by.css'

const By = ({ by, time }) => {
  return (
    <>
      <div className="by-entry">
        {/*TODO:: Add url to user*/}
        <a href="test">{by}</a>
      </div>
      <div className="by-entry">
        {time && moment(time * 1000).fromNow()}
      </div>
    </>
  )
}

By.propTypes = {
  by: PropTypes.string.isRequired,
  time: PropTypes.number.isRequired,
}

export { By }