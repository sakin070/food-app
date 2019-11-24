import {
    IonButton,
    IonContent, IonImg,
    IonPage,
} from '@ionic/react';
import React from 'react';

const LogFood: React.FC = () => {
    return (
        <IonPage>
            <IonContent className="ion-padding">
                <IonImg src={"assets/food.jpg"} />
                <div className="ion-padding row">
                    <IonButton color="danger" href="/home" slot="start">Cancel</IonButton>

                    <IonButton color="success" href="/home" style={{float: 'right'}}>Log Food</IonButton>
                </div>
            </IonContent>
        </IonPage>
    );
};

export default LogFood;
