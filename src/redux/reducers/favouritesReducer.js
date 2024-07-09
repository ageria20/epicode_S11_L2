const initialState = {
  content: [],
};

const addFavouriteJob = (state = initialState, action) => {
  switch (action.type) {
    case "FAV_JOB":
      return {
        ...state,
        content: state.content.concat(action.payload),
      };
    case "DELETE_JOB":
      return {
        ...state,
        content: state.content.filter(favJob => favJob._id !== action.payload),
      };
    default:
      return state;
  }
};

export default addFavouriteJob;
