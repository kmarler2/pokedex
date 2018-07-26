const addSelectedTypeReducer = (state='', action) => {
  switch (action.type) {
    case 'ADD_CLICK_TYPE':
      return action.selectedType
    default:
      return state;
  }
};

export default addSelectedTypeReducer;