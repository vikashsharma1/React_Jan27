let INITIAL_STATE = {
  userName: {}
};
export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "SET_USER_NAME":
      console.log(action.payload, "Main Reducer");
      return Object.assign({}, { ...state }, { userName: action.payload });
    default:
      return state;
  }
};
