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
  return {
    type: 'HIDE',
  }
}

export const setNotification = (msg, durationInSeconds) => {
  return dispatch => {
    setTimeout(() => {
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
