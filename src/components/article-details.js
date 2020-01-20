import React, { useEffect, useState } from 'react'
import superagent from 'superagent'

import './article-details.css'
import { useParams } from 'react-router'
import { Article } from './article'

// TODO: export routes in constant
const articleUrl = (id) => `https://hacker-news.firebaseio.com/v0/item/${id}.json`

const getArticle = async (id) => {
  try {
    const res = await superagent.get(articleUrl(id))
    const article = res.body
    return article
  } catch (e) {
    console.error(e)
    throw e
  }
}

const ArticleDetails = () => {
  const { id } = useParams()

  const [article, setArticle] = useState([])
  useEffect(
    () => {
      async function fetchArticle() {
        const article = await getArticle(id)
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

    </div>
  )
}

export { ArticleDetails }