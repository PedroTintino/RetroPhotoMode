import {initializeApp} from 'firebase/app';
import {getStorage} from 'firebase/storage';

const firebaseConfig = {
  apiKey: "AIzaSyDKCt1dKJ8kIrTkeCRf6r8RWUhKuXXSheE",
  authDomain: "retroview-f4bd0.firebaseapp.com",
  projectId: "retroview-f4bd0",
  storageBucket: "retroview-f4bd0.appspot.com",
  messagingSenderId: "157514911578",
  appId: "1:157514911578:web:c863111f0cdd6d727eed63"
};

const firebase = initializeApp(firebaseConfig);

const storage = getStorage(firebase);

export {firebase, storage};
