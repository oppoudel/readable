Object.keys(state.comments).map(id => state.comments[id]).map(item => {
  return {
    [item.parentId]: item
  }
}),