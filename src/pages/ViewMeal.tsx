import {
     IonButtons,
    IonContent, IonHeader, IonImg,
    IonPage, IonToolbar, IonBackButton
} from '@ionic/react';
import React from 'react';

const ViewMeal: React.FC = () => {
    return (
        <IonPage>
            <IonContent className="ion-padding">
                <IonHeader>
                    <IonToolbar>
                        <IonButtons slot="start">
                            <IonBackButton defaultHref="home" />
                        </IonButtons>
                    </IonToolbar>
                </IonHeader>
                <IonImg src={"assets/food.jpg"} />
                <p> Ingredients</p>
                <ul>
                    <li> Lettuce</li>
                    <li> Carrot</li>
                    <li> Onions</li>
                    <li> Peas</li>
                    <li> Tomatoes</li>
                </ul>
                <p>Total Calories: 33KCal</p>
            </IonContent>
        </IonPage>
    );
};

export default ViewMeal;
