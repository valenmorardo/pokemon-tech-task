import axios from "axios";
import { Dispatch } from "redux";

const getPokemones: any = () => {
  return async (dispatch: Dispatch) => {
    try {
      const pokemones = await axios("http://localhost:3000/api/pokemones");

      return dispatch({
        type: "GET_POKEMONES",
        payload: pokemones.data,
      });
    } catch (error: any) {
      try {
        const pokemones = await axios(
          "http://localhost:3000/api/pokemonesLocal"
        );
        return dispatch({
          type: "GET_POKEMONES",
          payload: pokemones.data,
        });
      } catch (error: any) {
        return dispatch({
          type: "ERROR",
          payload: error.response,
        });
      }
    }
  };
};


export { getPokemones };
