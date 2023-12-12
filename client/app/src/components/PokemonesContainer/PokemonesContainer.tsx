import React from "react";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import { getPokemonesAction } from "../../redux/actions";


import Cards from "./Cards/Cards";
import { IonLoading } from "@ionic/react";


const PokemonesContainer = () => {
  const dispatch = useDispatch();

  const PokemonesRedux = useSelector((state: any) => state.pokemones);
  const pokemones = PokemonesRedux.data?.pokemon_v2_pokemon;

  useEffect(() => {
    dispatch(getPokemonesAction());
  }, []);

  return (
    <>
      {pokemones ? (
        <div>
          <Cards pokemones={pokemones} />
        </div>
      ) : <IonLoading  message="Loading data..." duration={3000} animated={true} spinner={'dots'} isOpen={true}/>}
    </>
  );
};

export default PokemonesContainer;
