import {
    IonButton,
    IonContent,
    IonInput,
    IonItem,
    IonLabel,
    IonPage,
    IonText,
} from '@ionic/react';
import React from 'react';

const Register: React.FC = () => {
    return (
        <IonPage>
            <IonContent className="ion-padding">
                <IonItem>
                    <IonLabel  position="stacked"> <IonText> First Name</IonText></IonLabel>
                    <IonInput required type="text"></IonInput>
                </IonItem>

                <IonItem>
                    <IonLabel  position="stacked"> <IonText> Last Name</IonText></IonLabel>
                    <IonInput required type="text"></IonInput>
                </IonItem>


                <IonItem>
                    <IonLabel  position="stacked"> <IonText> Email</IonText></IonLabel>
                    <IonInput required type="text"></IonInput>
                </IonItem>

                <IonItem>
                    <IonLabel  position="stacked"> <IonText> Password</IonText></IonLabel>
                    <IonInput required type="password"></IonInput>
                </IonItem>

                <div className="ion-padding">
                    <IonButton expand="block" type="submit" class="ion-no-margin" href="/">Sign Up </IonButton>
                </div>
            </IonContent>
        </IonPage>
    );
};

export default Register;
