const initialState = {
  jobs: [],
};

const addJob = (state = initialState, action) => {
  switch (action.type) {
    case "JOBS":
      return {
        ...state,
        jobs: state.jobs.concat(action.payload),
      };

    default:
      return state;
  }
};

export default addJob;
