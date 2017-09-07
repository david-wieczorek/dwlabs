import firebase from 'firebase';

var config = {
  apiKey: 'AIzaSyBUUAojIrPN0v-J_bPTMjZUyFS1ySrjTVk',
  authDomain: 'dwlabs-622b7.firebaseapp.com',
  databaseURL: 'https://dwlabs-622b7.firebaseio.com',
  projectId: 'dwlabs-622b7',
  storageBucket: 'dwlabs-622b7.appspot.com',
  messagingSenderId: '318844301206'
};
var fire = firebase.initializeApp(config);

export default fire;
