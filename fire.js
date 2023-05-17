var firebase = require('firebase')
// datos de firebase
var config = {

  apiKey: "AIzaSyDQtnKC7PsNqhC9VJ6gfg8kZBWyxi15t_M",
  authDomain: "did1-c1f21.firebaseapp.com",
  projectId: "did1-c1f21",
  storageBucket: "did1-c1f21.appspot.com",
  messagingSenderId: "24099899736",
  appId: "1:24099899736:web:e22e0ec4ee64587bb07d2d",
  measurementId: "G-PGZWYWKEHE"
};

const fire = firebase.initializeApp(config);
module.exports = fire;