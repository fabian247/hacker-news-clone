import superagent from 'superagent'

const topStoriesUrl = "https://hacker-news.firebaseio.com/v0/topstories.json"

const getTopstories = async () => {
  try {
    const res = await superagent.get(topStoriesUrl)
    const articleIds = res.body
    return articleIds
  } catch (e) {
    console.error(e)
    throw e
  }
}

export { topStoriesUrl, getTopstories }
