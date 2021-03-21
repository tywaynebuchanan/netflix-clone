import Firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

import { seedDatabase } from '../seed';

const config = {
  apiKey: 'AIzaSyBOeO1ywtuA2HXljAJXcrv5CNuig648FSM',
  authDomain: 'netflix-f47ff.firebaseapp.com',
  projectId: 'netflix-f47ff',
  storageBucket: 'netflix-f47ff.appspot.com',
  messagingSenderId: '211581250127',
  appId: '1:211581250127:web:9315937bbbe0c79735d83a',
  measurementId: 'G-L9Q0NX345N',
};

const firebase = Firebase.initializeApp(config);

// seedDatabase(firebase);

export { firebase };
