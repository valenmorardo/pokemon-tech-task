import React from "react";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import { getPokemones } from "../../redux/actions";

import Cards from "./Cards/Cards";
import {
  IonContent,
  IonLoading,
  IonRefresher,
  IonRefresherContent,
  RefresherEventDetail,
} from "@ionic/react";
import Paginado from "./Paginado/Paginado";

const PokemonesContainer = () => {
  const dispatch = useDispatch();

  const PokemonesRedux = useSelector((state: any) => state.pokemones);
  const pokemones = PokemonesRedux.data?.pokemon_v2_pokemon;

  const error = useSelector((state: any) => state.error);



  useEffect(() => {
    dispatch(getPokemones())
  }, []);

  const [pagina, setPagina] = useState(1);
  const [porPagina, setPorPagina] = useState(6);
  const maximo = pokemones?.length / porPagina;
  const currentPokemones = pokemones?.slice(
    (pagina - 1) * porPagina,
    (pagina - 1) * porPagina + porPagina
  );

  function handleRefresh(event: CustomEvent<RefresherEventDetail>) {
    const start = performance.now();
    
    dispatch(getPokemones())
    const end = performance.now();
    const dispatchTime = end - start;
    setTimeout(() => {
      event.detail.complete();
    }, dispatchTime + 1000);
  }

  return (
    <>
      {error.status ? (
        <h1> HUBO UN ERRROR EN EL SERVIDOR</h1>
      ) : pokemones?.length ? (
        <div>
          <IonRefresher
            slot="fixed"
            pullFactor={0.5}
            pullMin={100}
            pullMax={200}
            onIonRefresh={handleRefresh}
          >
            <IonRefresherContent></IonRefresherContent>
          </IonRefresher>

          <Paginado pagina={pagina} setPagina={setPagina} maximo={maximo} />
          <Cards pokemones={currentPokemones} />
          <Paginado pagina={pagina} setPagina={setPagina} maximo={maximo} />
        </div>
      ) : (
        <IonLoading
          message="Loading data..."
          animated={true}
          spinner={"dots"}
          isOpen={true}
        />
      )}
    </>
  );
};

export default PokemonesContainer;
