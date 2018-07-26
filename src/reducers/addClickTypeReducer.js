const addSelectedTypeReducer = (state=[], action) => {
  switch (action.type) {
    case 'ADD_TYPES':
      return action.selectedType
    default:
      return state;
  }
};