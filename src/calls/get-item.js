import superagent from 'superagent'

const itemUrl = (id) => `https://hacker-news.firebaseio.com/v0/item/${id}.json`

const getItem = async (id) => {
  try {
    const res = await superagent.get(itemUrl(id))
    const item = res.body
    return item
  } catch (e) {
    console.error(e)
    throw e
  }
}

export { itemUrl, getItem }
