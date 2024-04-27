import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import { FirebaseOptions, initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { FIREBASE_CONFIG } from './config';

const firebaseConfig = FIREBASE_CONFIG as FirebaseOptions;

const App: React.FC = () => {
  return <h1 className="text-3xl font-bold underline">
    Hello world!
  </h1>;
};

let portal = document.getElementById('root') as HTMLElement;
const root = ReactDOM.createRoot(portal);
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

root.render(<App />);