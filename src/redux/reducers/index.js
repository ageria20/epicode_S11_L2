const initialState = {
  favouriteJobs: {
    content: [],
  },
  isSelected: {
    content: false,
  },
};

const mainReducer = (state = initialState, action) => {
  switch (action.type) {
    case "FAV_JOB":
      return {
        ...state,
        favouriteJobs: {
          ...state.favouriteJobs,
          content: state.favouriteJobs.content.concat(action.payload),
        },
      };
    case "DELETE_JOB":
      return {
        ...state,
        favouriteJobs: {
          ...state.favouriteJobs,
          content: state.favouriteJobs.content.filter(favJob => favJob._id !== action.payload),
        },
      };
    case "SELECTED":
      return {
        ...state,
        isSelected: {
          ...state.isSelected,
          content: action.payload,
        },
      };
    default:
      return state;
  }
};
export default mainReducer;
