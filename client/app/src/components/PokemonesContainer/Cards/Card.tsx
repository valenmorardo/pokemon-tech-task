import { IonCard, IonContent, IonItem, IonLabel } from "@ionic/react";
import React from "react";

const Card = ({
  base_experience,
  height,
  name,
  weight,
  pokemon_v2_pokemonabilities,
}) => {
  return (
    <IonCard>
      <IonItem>
        <IonLabel>NAME: {name}</IonLabel>
      </IonItem>

      <IonItem>
        <IonLabel>HEIGHT: {height}</IonLabel>
      </IonItem>

      <IonItem>
        <IonLabel>WEIGHT: {weight}</IonLabel>
      </IonItem>

      <IonItem>
        <IonLabel>EXPERIENCE: {base_experience}</IonLabel>
      </IonItem>

      <IonItem>
        <IonLabel>
          ABILITIES:{" "}
          {pokemon_v2_pokemonabilities.map((abilitie) => (
            <IonItem>
              <IonLabel>{abilitie.pokemon_v2_ability.name}</IonLabel>
            </IonItem>
          ))}
        </IonLabel>
      </IonItem>
    </IonCard>
  );
};

export default Card;
