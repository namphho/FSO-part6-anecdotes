const initState = ''

const notificationReducer = (state = initState, action) => {
  switch (action.type) {
    case 'VOTE':
      return action.data.msg
    default:
      return state
  }
}

export default notificationReducer
