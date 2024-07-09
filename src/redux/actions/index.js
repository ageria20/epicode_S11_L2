export const FAV_JOB = "FAV_JOB";
export const DELETE_JOB = "DELETE_JOB";
export const SELECTED = "SELECTED";
export const JOBS = "JOBS";

export const addFavouriteJob = job => ({ type: FAV_JOB, payload: job });
export const deleteFavouriteJob = job => ({ type: DELETE_JOB, payload: job });
export const storeJobs = jobs => ({ type: "JOBS", payload: jobs });

export const getJobsFetch = params => {
  return async (dispatch, getState) => {
    const baseEndpoint = "https://strive-benchmark.herokuapp.com/api/jobs?company=";

    try {
      const response = await fetch(baseEndpoint + params.company);
      if (response.ok) {
        const { data } = await response.json();
        dispatch(storeJobs(data));
      } else {
        alert("Error fetching results");
      }
    } catch (error) {
      console.log(error);
    }
  };
};
