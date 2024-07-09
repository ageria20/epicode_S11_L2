export const FAV_JOB = "FAV_JOB";
export const DELETE_JOB = "DELETE_JOB";
export const SELECTED = "SELECTED";
export const JOBS = "JOBS";

export const addFavouriteJob = job => ({ type: FAV_JOB, payload: job });
export const deleteFavouriteJob = job => ({ type: DELETE_JOB, payload: job });
export const storeJobs = jobs => ({ type: "JOBS", payload: jobs });
