import React from "react";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import { getPokemonesAction } from "../../redux/actions";


import Cards from "./Cards/Cards";
import { IonLoading } from "@ionic/react";
import Paginado from "./Paginado/Paginado";


const PokemonesContainer = () => {
  const dispatch = useDispatch();

  const PokemonesRedux = useSelector((state: any) => state.pokemones);
  const pokemones = PokemonesRedux.data?.pokemon_v2_pokemon;

  useEffect(() => {
    dispatch(getPokemonesAction());
  }, [dispatch]);


  const [pagina, setPagina] = useState(1);
  const [porPagina, setPorPagina] = useState(6);
  const maximo = pokemones?.length / porPagina;
  const currentPokemones = pokemones?.slice(
    (pagina - 1) * porPagina,
    (pagina - 1) * porPagina + porPagina
  );


  return (
    <>
      {pokemones ? (
        <div>
          <Paginado pagina={pagina} setPagina={setPagina} maximo={maximo}/>
          <Cards pokemones={currentPokemones} />
          <Paginado pagina={pagina} setPagina={setPagina} maximo={maximo}/>
        </div>
      ) : <IonLoading  message="Loading data..." duration={3000} animated={true} spinner={'dots'} isOpen={true}/>}
    </>
  );
};

export default PokemonesContainer;
