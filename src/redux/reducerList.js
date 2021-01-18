const initialList = ['thong20']
const reducerList = (state = initialList, action) => {
  switch (action.type) {
    case 'ADD_ITEM': {
      state.push(action.payload)
      return state
    }
    default: return state
  }
}


export default reducerList
