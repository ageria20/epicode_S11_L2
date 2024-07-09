const initialState = {
  content: [],
};

const addJob = (state = initialState, action) => {
  switch (action.type) {
    case "JOBS":
      return {
        ...state,
        content: state.content.concat(action.payload),
      };
    default:
      return state;
  }
};

export default addJob;
