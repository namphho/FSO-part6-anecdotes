import noteService from '../services/notes'

const reducer = (state = [], action) => {
  console.log('state now: ', state)
  console.log('action', action)
  switch (action.type) {
    case 'VOTE':
      const id = action.updatedNote.id
      const newList = state.map((e) => (e.id === id ? action.updatedNote : e))
      return sortByVotes(newList)
    case 'ADD_NEW':
      return sortByVotes([...state, action.newNote])
    case 'INIT_DATA':
      return sortByVotes(action.data)
    default:
      return sortByVotes(state)
  }
}

const sortByVotes = (data) => {
  return data.sort((a, b) => b.votes - a.votes)
}

export const voteNote = (note) => {
  return async (dispatch) => {
    const updatedNote = await noteService.voteNote(note)
    dispatch({
      type: 'VOTE',
      updatedNote,
    })
  }
}

export const addNew = (content) => {
  return async (dispatch) => {
    const newNote = await noteService.createNew(content)
    dispatch({
      type: 'ADD_NEW',
      newNote,
    })
  }
}

export const initializeData = () => {
  return async (dispatch) => {
    const notes = await noteService.getAll()
    dispatch({
      type: 'INIT_DATA',
      data: notes,
    })
  }
}

export default reducer
