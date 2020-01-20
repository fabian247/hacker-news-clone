import React, { useEffect, useState } from 'react'
import { ArticleRow } from './article'
import { getTopstories } from '../calls/get-topstories'

const Articles = () => {
  const [articles, setArticles] = useState([])
  useEffect(
    () => {
      async function fetchArticles() {
        const articles = await getTopstories()
        setArticles(articles.slice(0, 30))
      }

      fetchArticles()
    }, [],
  )

  return (
    <ol>
      {articles.map((articleId) => (
          <ArticleRow id={articleId} key={articleId}/>
        ),
      )}
    </ol>
  )
}

export { Articles }