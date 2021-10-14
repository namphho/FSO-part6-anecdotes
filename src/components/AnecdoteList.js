import { React } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { voteNote } from '../reducers/anecdoteReducer'
import {
  showNotification,
  hideNotification,
} from '../reducers/notificationReducer'
import noteService from '../services/notes'

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
    const updateNote = await noteService.voteNote(anecnote)
    dispatch(voteNote(updateNote))
    dispatch(showNotification(updateNote.content))
    setTimeout(() => {
      dispatch(hideNotification())
    }, 5000)
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
