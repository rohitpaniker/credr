let defaultState = {
  credrData: []
}

const mainReducer=(state=defaultState, action) => {
  if(action.type === 'SAVE_GLOBAL') {
    return {
      ...state,
      credrData: action.credrData
    }
  } else {
    return {
      ...state
    }
  }
}

export default mainReducer;
