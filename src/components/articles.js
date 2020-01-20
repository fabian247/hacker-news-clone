import React, { useEffect, useState } from 'react'
import superagent from 'superagent'

const topStoriesUrl = "https://hacker-news.firebaseio.com/v0/topstories.json"

const getArticles = async () => {
  try {
    const res = await superagent.get(topStoriesUrl)
    const articleIds = res.body
    return articleIds
  } catch (e) {
    console.error(e)
    throw e
  }
}

const Articles = () => {
  const [articles, setArticles] = useState([])
  useEffect(
    () => {
      async function fetchArticles() {
        const articles = await getArticles()
        setArticles(articles)
      }

      fetchArticles()
    }, [],
  )

  return (
    <div>
      {articles.map(articleId => {
        return (
          <div>
            {articleId}
          </div>
        )
      })}
    </div>
  )
}

export { Articles }