import React from "react";
import { IonContent } from "@ionic/react";
import Card from "./Card";

const Cards = ({ pokemones }) => {
  return (
    <div>
      {pokemones?.map((pokemon) => (
        <Card {...pokemon} key={pokemon.id} />
      ))}
    </div>
  );
};

export default Cards;
