import React from "react";
import { IonHeader, IonToolbar, IonTitle } from '@ionic/react';

const Title: React.FC = () => {
  return (
    <IonHeader>
      <IonToolbar>
        <IonTitle>Pokedex</IonTitle>
      </IonToolbar>
    </IonHeader>
  );
};

export default Title;
