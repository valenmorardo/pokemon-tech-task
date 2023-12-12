const initialState = {
  pokemones: [],
  error: {}
};

const rootReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case "GET_POKEMONES":
      return {
        ...state,
        pokemones: action.payload,
      };

    case "ERROR":
      return {
        ...state,
       error: action.payload
      };
      
    default:
      return state;
  }
};

export default rootReducer;
