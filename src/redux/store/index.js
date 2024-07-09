import { combineReducers, configureStore } from "@reduxjs/toolkit";

import favouritesReducer from "../reducers/favouritesReducer";
import companyResultReducer from "../reducers/companyResultReducer";
import mainSearchReducer from "../reducers/mainSearchReducer";

const rootReducer = combineReducers({
  favourites: favouritesReducer,
  companyResults: companyResultReducer,
  companyList: mainSearchReducer,
});

const store = configureStore({
  reducer: rootReducer,
});

export default store;
