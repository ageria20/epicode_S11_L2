import { combineReducers, configureStore } from "@reduxjs/toolkit";

import favouritesReducer from "../reducers/favouritesReducer";
import companyResultReducer from "../reducers/companyResultReducer";

const rootReducer = combineReducers({
  favourites: favouritesReducer,
  companyResults: companyResultReducer,
});

const store = configureStore({
  reducer: rootReducer,
});

export default store;
