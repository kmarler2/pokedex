const addTypesReducer = (state=[], action) => {
  switch (action.type) {
    case 'ADD_TYPES':
      return action.types
    default:
      return state;
  }
};

export default addTypesReducer;
