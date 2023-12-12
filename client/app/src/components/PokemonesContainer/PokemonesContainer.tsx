import React from "react";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import { getPokemonesAction } from "../../redux/actions";

import Cards from "./Cards/Cards";


const PokemonesContainer = () => {


    const dispatch = useDispatch();

    const PokemonesRedux = useSelector((state: any) => state.pokemones)
    const pokemones = PokemonesRedux.data?.pokemon_v2_pokemon

    useEffect(() => {
        dispatch(getPokemonesAction())
    }, [])

  return (
    <div>
      <Cards pokemones = {pokemones}/>

    </div>
  );
};

export default PokemonesContainer;
