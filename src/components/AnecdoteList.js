import { React } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { voteNote } from '../reducers/anecdoteReducer'
import { setNotification } from '../reducers/notificationReducer'

const AnecdoteList = () => {
  const anecdotes = useSelector((state) => {
    const filter = state.filter
    if (filter !== '') {
      //filter
      return state.anecdote.filter((anecdote) =>
        anecdote.content.includes(filter)
      )
    } else {
      return state.anecdote
    }
  })
  const dispatch = useDispatch()

  const vote = async (anecnote) => {
    dispatch(voteNote(anecnote))
    dispatch(setNotification(`you voted '${anecnote.content}'`, 3))
  }

  return (
    <div>
      {anecdotes.map((anecdote) => (
        <div key={anecdote.id}>
          <div>{anecdote.content}</div>
          <div>
            has {anecdote.votes}
            <button onClick={() => vote(anecdote)}>vote</button>
          </div>
        </div>
      ))}
    </div>
  )
}

export default AnecdoteList
