import axios from "axios";
import { Dispatch } from "redux";

const getPokemonesApi: any = () => {
  return async (dispatch: Dispatch) => {
    try {
      const pokemones = await axios("http://localhost:3000/api/pokemones");

      return dispatch({
        type: "GET_POKEMONES",
        payload: pokemones.data,
      });
    } catch (error: any) {
      console.log(error.response.data)
      return dispatch({
        type: "ERROR",
        payload: error.response.data,
      });
    }
  };
};

const getPokemonesLocal: any = () => {
  return async (dispatch: Dispatch) => {
    try {
      const pokemones = await axios("http://localhost:3000/api/pokemonesLocal");

      return dispatch({
        type: "GET_POKEMONES",
        payload: pokemones.data,
      });
    } catch (error: any) {
      return dispatch({
        type: "ERROR",
        payload: error,
      });
    }
  };
};

export { getPokemonesApi, getPokemonesLocal };
