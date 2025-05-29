import { initializeApp } from 'firebase/app';

const firebaseConfig = {
  apiKey: 'FAKE_API_KEY',
  authDomain: 'your-app.firebaseapp.com',
  projectId: 'your-app',
  storageBucket: 'your-app.appspot.com',
  messagingSenderId: 'FAKE_MSG_ID',
  appId: 'FAKE_APP_ID',
};

initializeApp(firebaseConfig);
