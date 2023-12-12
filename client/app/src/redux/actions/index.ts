import axios from "axios";

const getPokemonesAction = () => {
  return async (dispatch: any) => {
    try {
      const pokemones = await axios("http://localhost:3000/api/pokemones");

      return dispatch({
        type: "GET_POKEMONES",
        payload: pokemones.data,
      });
    } catch (error: any) {
      return dispatch({
        type: "GET_POKEMONES",
        payload: error.response.data,
      });
    }
  };
};

export { getPokemonesAction };
