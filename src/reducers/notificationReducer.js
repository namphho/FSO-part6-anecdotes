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

export const showNotification = (msg) => {
  return {
    type: 'SHOW',
    data: {
      msg: msg,
    },
  }
}

export const hideNotification = () => {
  return {
    type: 'HIDE',
  }
}

export default notificationReducer
