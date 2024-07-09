export const FAV_JOB = "FAV_JOB";
export const DELETE_JOB = "DELETE_JOB";
export const SELECTED = "SELECTED";
export const JOBS = "JOBS";
export const COMPANY_LOADING_ON = "COMPANY_LOADING_ON";
export const COMPANY_LOADING_OFF = "COMPANY_LOADING_OFF";
export const QUERY = "QUERY";
export const COMPANY = "COMPANY";

export const addFavouriteJob = job => ({ type: FAV_JOB, payload: job });
export const deleteFavouriteJob = job => ({ type: DELETE_JOB, payload: job });
export const storeJobs = jobs => ({ type: JOBS, payload: jobs });
export const storeCompany = company => ({ type: COMPANY, payload: company });

export const submitFetch = query => {
  return async dispatch => {
    const baseEndpoint = "https://strive-benchmark.herokuapp.com/api/jobs?search=";
    dispatch({ type: COMPANY_LOADING_ON });
    try {
      const response = await fetch(baseEndpoint + query + "&limit=20");
      if (response.ok) {
        const { data } = await response.json();
        dispatch(storeCompany(data));
        dispatch({ type: COMPANY_LOADING_OFF });
      } else {
        alert("Error fetching results");
      }
    } catch (error) {
      console.log(error);
    }
  };
};

export const getJobsFetch = params => {
  // eslint-disable-next-line no-unused-vars

  // eslint-disable-next-line no-unused-vars
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
