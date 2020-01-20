import React, { useEffect, useState } from 'react'

import './article-details.css'
import { useParams } from 'react-router'
import { Article } from './article'
import { Comment } from './comment'
import { getItem } from '../calls/get-item'

const ArticleDetails = () => {
  const { id } = useParams()

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

  const [text, setText] = useState('')

  const handleChange = event => {
    setText(event.target.value)
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    alert(`You entered comment: ${text}`)
  }

  return (
    <div className="details-container">
      <Article {...article}/>
      <form onSubmit={handleSubmit} className="details-form">
        <div>
          <textarea rows={5} className="details-comment" value={text} onChange={handleChange}/>
        </div>
        <button className="details-button">
          add comment
        </button>
      </form>
      {article.kids && article.kids.map(kid => <Comment id={kid}/>)}
    </div>
  )
}

export { ArticleDetails }