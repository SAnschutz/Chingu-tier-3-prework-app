const picsReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_PICS':
      return action.newPics;
    default:
      return state;
  }
};

export { picsReducer as default };
