const INITIAL_STATE = {
  CurrentUser: null,
};

function userReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case 'SET_CURRENT_USER':
      return {
        ...state,
        CurrentUser: action.paylod,
      };

    default:
      return state;
  }
}

export default userReducer;
