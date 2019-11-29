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


const items = [
    {image:'assets/food.jpg', date: '2019-04-12', ingredients: 'Lettuce, Carrot, Onions, Peas, Tomatoes, Avocado' , calories:'33KCal'},
    {image:'assets/food2.jpg', date: '2019-04-12', ingredients: 'Bacon, Eggs, Potatoes, Mushroom, Asparagus, Tomatoes' , calories:'100KCal'},
    {image:'assets/food3.jpg', date: '2019-04-12', ingredients: 'Cucumber, Lettuce, Tomatoes' , calories:'1KCal'},
    {image:'assets/food4.jpg', date: '2019-04-12', ingredients: 'Pasta, Mushroom, Green Beans, Shrimp, Tomatoes' , calories:'22Cal'},
    {image:'assets/food5.jpg', date: '2019-04-12', ingredients: 'Cheese, Corn, Beef, Pita Bread' , calories:'31KCal'},
    {image:'assets/food6.jpg', date: '2019-04-12', ingredients: 'Waffles, Orange, Strawberries ' , calories:'40KCal'},
    {image:'assets/food7.jpg', date: '2019-04-12', ingredients: 'Beef' , calories:'15KCal'},
];

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
              <IonItem href="/view-meal">
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
