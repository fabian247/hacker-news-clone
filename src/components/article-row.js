import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'

import { getItem } from '../calls/get-item'
import { isObjectEmpty } from '../helper/helper'

import { Article } from './article'

const ArticleRow = ({ id }) => {
  const [article, setArticle] = useState({})
  useEffect(
    () => {
      async function fetchArticle() {
        const article = await getItem(id)
        setArticle(article)
      }

      fetchArticle()
    }, [id],
  )

  return (
    <li>
      {!isObjectEmpty(article) &&
      <Article id={id} {...article} />
      }
    </li>
  )
}

ArticleRow.propTypes = {
  id: PropTypes.number.isRequired,
}

export { ArticleRow }