const initialState = {
  quote: {},
};

const quote = (state = initialState, action) => {
  switch (action.type) {
    case "GET_QUOTE":
      return {
        ...state,
        quote: action.payload.data.data,
      };

    default:
      return state;
  }
};

export default quote;
