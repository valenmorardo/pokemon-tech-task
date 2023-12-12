const initialState = {
    pokemones: {},
  };
  
  const rootReducer = (state = initialState, action: any) => {
    switch (action.type) {
      case "GET_POKEMONES":
        return {
          ...state,
          
        };
  
    
  
      default:
        return state;
    }
  };
  
  export default rootReducer;
  