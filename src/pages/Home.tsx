import {
    IonAvatar,
    IonContent,
    IonFab,
    IonFabButton,
    IonHeader,
    IonIcon, IonItem, IonLabel,
    IonPage,
    IonTitle,
    IonToolbar
} from '@ionic/react';
import React from 'react';


const items = [{image:'assets/food.jpg', date: '2019-04-12', ingredients: 'a picture of a cat' , calories:'100KCal'}];

const Home: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Food Log</IonTitle>

        </IonToolbar>
          <IonFab vertical="top" horizontal="end" slot="fixed">
              <IonFabButton size="small" href="/log-food" color="light">
                  <IonIcon name="camera" />
              </IonFabButton>
          </IonFab>
      </IonHeader>
      <IonContent className="ion-padding">

          {items.map((foodInfo, i) => (
              <IonItem>
                  <IonAvatar slot="start">
                      <img src={foodInfo.image} />
                  </IonAvatar>
                  <IonLabel>
                      <h3>{foodInfo.date}</h3>
                      <p>{foodInfo.ingredients}</p>
                      <p>{foodInfo.calories}</p>
                  </IonLabel>
              </IonItem>
          ))}
      </IonContent>
    </IonPage>
  );
};

export default Home;
