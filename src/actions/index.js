export const SET_USER_NAME = "SET_USER_NAME";

// Get USER name on link click from home
export function setUserName(holder) {
  console.log("set model flag", holder);
  return dispatch => {
    dispatch({
      type: "SET_USER_NAME",
      payload: holder
    });
  };
}
