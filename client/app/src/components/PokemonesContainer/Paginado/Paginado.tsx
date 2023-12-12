import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";

import { IonButton, IonIcon, IonText } from "@ionic/react";
import { arrowForwardCircle, arrowBackCircle } from "ionicons/icons";

const Paginado = ({ pagina, setPagina, maximo }) => {
  const pokemones = useSelector((state: any) => state.pokemones);

  const nextPage = () => {
    setPagina(parseInt(pagina) + 1);
  };

  const previousPage = () => {
    setPagina(parseInt(pagina) - 1);
  };

  useEffect(() => {
    setPagina(1);
  }, [pokemones]);

  return (
    <div>
      <IonButton onClick={previousPage} disabled={pagina === 1 || pagina < 1}>
        <IonIcon slot="icon-only" icon={arrowBackCircle}></IonIcon>
      </IonButton>

      <IonText>{pagina}</IonText>

      <IonText> of {Math.ceil(maximo)}</IonText>

      <IonButton
        onClick={nextPage}
        disabled={pagina === Math.ceil(maximo) || pagina > Math.ceil(maximo)}
      >
        <IonIcon slot="icon-only" icon={arrowForwardCircle}></IonIcon>
      </IonButton>
    </div>
  );
};

export default Paginado;
