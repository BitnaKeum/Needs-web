var express = require('express');
var router = express.Router();
var firebase = require('firebase');
require('date-utils');

/* firebase Web-App Configuration */
var firebase_config = {
  apiKey: "AIzaSyCE59at8BFrqn84RG63hn1uS_NhNrnPuso",
  authDomain: "lloginexample.firebaseapp.com",
  databaseURL: "https://lloginexample.firebaseio.com",
  projectId: "lloginexample",
  storageBucket: "lloginexample.appspot.com",
  messagingSenderId: "124851004056",
  appId: "1:124851004056:web:b58239166f9907ce3926ed",
  measurementId: "G-CR5E843ZEM"
};

/* Initialize Firebase */
if (!firebase.apps.length) {
  firebase.initializeApp(firebase_config);
}
var db = firebase.firestore();  //firestore
var fb_auth = firebase.auth();


/* GET Main Page */
router.get('/', function(req, res, next){
    console.log("게시판 렌더링함.");
    res.render("home");
});

/* POST Main Page */
router.post('/', function(req, res) {
    console.log("여길 거치네?");
    res.render("home");
});


module.exports = router;
