const initState = ''

const filterReducer = (state = initState, action) => {
  switch (action.type) {
    case 'FILTER':
      return action.data.msg
    default:
      return state
  }
}

export const filter = (value) => {
  return {
    type: 'FILTER',
    data: {
      msg: value,
    },
  }
}

export default filterReducer
