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

const Login: React.FC = () => {
    return (
        <IonPage>
            <IonContent className="ion-padding">
                <IonItem>
                    <IonLabel  position="stacked"> <IonText> Email</IonText></IonLabel>
                    <IonInput required type="text"></IonInput>
                </IonItem>

                <IonItem>
                    <IonLabel  position="stacked"> <IonText> Password</IonText></IonLabel>
                    <IonInput required type="password"></IonInput>
                </IonItem>
                <p>
                    {' '}
                    <a
                        rel="noopener"
                        href="/register"
                    >
                        click here if you don't have an account
                    </a>{' '}
                </p>
                <div className="ion-padding">
                    <IonButton expand="block" type="submit" class="ion-no-margin" href="/home"> Login</IonButton>
                </div>
            </IonContent>
        </IonPage>
    );
};

export default Login;
