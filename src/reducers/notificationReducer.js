const initState = ''

const notificationReducer = (state = initState, action) => {
  switch (action.type) {
    case 'SHOW':
      return action.data.msg
    case 'HIDE':
      return ''
    default:
      return state
  }
}

export const hideNotification = () => {
  timerId = undefined
  return {
    type: 'HIDE',
  }
}
var timerId;
export const setNotification = (msg, durationInSeconds) => {
  return dispatch => {
    if (timerId !== undefined) {
      clearTimeout(timerId)
    }
    timerId = setTimeout(() => {
      dispatch(hideNotification())
    }, durationInSeconds * 1000)
    dispatch({
      type: 'SHOW',
      data: {
        msg: msg,
      },
    })
  }
}

export default notificationReducer
