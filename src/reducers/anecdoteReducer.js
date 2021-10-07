const anecdotesAtStart = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
]

const getId = () => (100000 * Math.random()).toFixed(0)

const asObject = (anecdote) => {
  return {
    content: anecdote,
    id: getId(),
    votes: 0,
  }
}

const initialState = anecdotesAtStart.map(asObject)

const reducer = (state = initialState, action) => {
  console.log('state now: ', state)
  console.log('action', action)
  switch (action.type) {
    case 'VOTE':
      const id = action.data.id
      const item = state.find((e) => e.id === id)
      const changedItem = { ...item, votes: item.votes + 1 }
      const newList = state.map((e) => (e.id === id ? changedItem : e))
      return sortByVotes(newList)
    case 'ADD_NEW':
      const newNote = {
        content: action.data.content,
        id: getId(),
        votes: 0,
      }
      return sortByVotes([...state, newNote])
    default:
      return sortByVotes(state)
  }
}

const sortByVotes = (data) => {
  return data.sort((a, b) => b.votes - a.votes)
}

export const voteNote = (id) => {
  return {
    type: 'VOTE',
    data: {
      id: id,
    },
  }
}

export const addNew = (content) => {
  return {
    type: 'ADD_NEW',
    data: {
      content: content,
    },
  }
}

export default reducer
