

const actionAddItem = (item) => {
  return {
    type: 'ADD_ITEM',
    payload: item
  }
}

const actionAddTodo = content => {
  return {
    type: 'ADD_TODO',
    payload: content
  }
}
export {actionAddItem, actionAddTodo}