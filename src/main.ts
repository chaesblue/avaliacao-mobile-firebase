import { bootstrapApplication } from '@angular/platform-browser';
import { provideHttpClient } from '@angular/common/http';
import {
  RouteReuseStrategy,
  provideRouter,
  withPreloading,
  PreloadAllModules
} from '@angular/router';

import {
  IonicRouteStrategy,
  provideIonicAngular
} from '@ionic/angular/standalone';

import { provideFirebaseApp, initializeApp } from '@angular/fire/app';
import { provideFirestore, getFirestore } from '@angular/fire/firestore';

import { routes } from './app/app.routes';
import { AppComponent } from './app/app.component';

const firebaseConfig = {
  apiKey: "AIzaSyDlj2NlJe3ZsUEPxdUfk3PqJU3mcVkIFeI",
  authDomain: "avaliacao-mobile-2d839.firebaseapp.com",
  projectId: "avaliacao-mobile-2d839",
  storageBucket: "avaliacao-mobile-2d839.firebasestorage.app",
  messagingSenderId: "1051899906547",
  appId: "1:1051899906547:web:83acaa8f67bd0c5ff42a86",
  measurementId: "G-5KBLQ4KP23"
};

bootstrapApplication(AppComponent, {
 providers: [
  { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },

  provideIonicAngular(),

  provideRouter(
    routes,
    withPreloading(PreloadAllModules)
  ),

  provideHttpClient(),

  provideFirebaseApp(() =>
    initializeApp(firebaseConfig)
  ),

  provideFirestore(() =>
    getFirestore()
  )
]
});