const getId = () => (100000 * Math.random()).toFixed(0)

const reducer = (state = [], action) => {
  console.log('state now: ', state)
  console.log('action', action)
  switch (action.type) {
    case 'VOTE':
      const id = action.updatedNote.id
      const newList = state.map((e) => (e.id === id ? action.updatedNote : e))
      return sortByVotes(newList)
    case 'ADD_NEW':
      return sortByVotes([...state, action.note])
    case 'INIT_DATA':
      return sortByVotes(action.data)
    default:
      return sortByVotes(state)
  }
}

const sortByVotes = (data) => {
  return data.sort((a, b) => b.votes - a.votes)
}

export const voteNote = (updatedNote) => {
  return {
    type: 'VOTE',
    updatedNote,
  }
}

export const addNew = (note) => {
  return {
    type: 'ADD_NEW',
    note
  }
}

export const initializeData = (notes) => {
  return {
    type: 'INIT_DATA',
    data: notes,
  }
}

export default reducer
