const initialState = {
  company: [],
  isLoading: false,
  query: "",
};

const addCompany = (state = initialState, action) => {
  switch (action.type) {
    case "COMPANY_LOADING_ON":
      return {
        ...state,
        isLoading: true,
      };
    case "COMPANY_LOADING_OFF":
      return {
        ...state,
        isLoading: false,
      };
    case "QUERY":
      return {
        ...state,
        query: action.payload,
      };
    case "COMPANY":
      return {
        ...state,
        company: state.company.concat(action.payload),
      };

    default:
      return state;
  }
};

export default addCompany;
