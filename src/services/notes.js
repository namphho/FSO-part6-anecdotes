import axios from 'axios'

const baseUrl = 'http://localhost:3001/anecdotes'

const getAll = async () => {
  const response = await axios.get(baseUrl)
  return response.data
}

const createNew = async (content) => {
  const object = { content, votes: 0 }
  const response = await axios.post(baseUrl, object)
  return response.data
}

const voteNote = async (note) => {
  const object = { ...note, votes: note.votes + 1 }
  const response = await axios.put(`${baseUrl}/${note.id}`, object)
  return response.data
}

const exportedModules = {
  getAll,
  createNew,
  voteNote,
}

export default exportedModules
