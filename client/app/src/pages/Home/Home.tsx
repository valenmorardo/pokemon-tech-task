import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
} from "@ionic/react";

import Title from "../../components/title/Title";
import PokemonesContainer from "../../components/PokemonesContainer/PokemonesContainer";
import "./Home.css";

const Home: React.FC = () => {
  return (
    <IonPage>
      <IonContent fullscreen>
        <Title />
        <PokemonesContainer />
      </IonContent>
    </IonPage>
  );
};

export default Home;
