import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as firebase from 'firebase'
import configs from './config'
import { checkAuth , load } from './spreadsheet'
import Home from './Home'
//import registerServiceWorker from './regiserServiceWorker';
export const users = [
  {name: 'A'},
  {name: 'B'},
  {name: 'C'},
  {name: 'D'},
  {name: 'E'},
  {name: 'F'},
  {name: 'G'},
  {name: 'H'},
  {name: 'I'},
]
export const category = [
  'A','B','C','D','E','F','G','H','I'
]
var config = {
  apiKey: "AIzaSyAj0Q6DBp0d6xXd3qlts4c0q-ZWzRzP8lI",
  authDomain: "tachyon-173612.firebaseapp.com",
  databaseURL: "https://tachyon-173612.firebaseio.com",
  projectId: "tachyon-173612",
  storageBucket: "tachyon-173612.appspot.com",
  messagingSenderId: "336062402100"
};
firebase.initializeApp(config);
var database = firebase.database();
var number = firebase.database().ref("A")
console.log(number)
firebase.auth().onAuthStateChanged(function(user){
  if(user){
    var email = user.email
    console.log(email)
  }
  else{
    console.log("out")
  } 
})

/*var google = require('googleapis');
var sheets = google.sheets('v4');
var OAuth2 = google.auth.OAuth2

authorize(function(authClient) {
  var request = {
    // The ID of the spreadsheet to retrieve data from.
    spreadsheetId: '1GtE7r659fgbzxJbiv97vi2Gy56SJAh1xoV5Tlon4o1g',

    // The A1 notation of the values to retrieve.
    range: 'Sheet1!A2:B', 

    // How values should be represented in the output.
    // The default render option is ValueRenderOption.FORMATTED_VALUE.
    valueRenderOption: 'FORMATTED_VALUE',  // 

    // How dates, times, and durations should be represented in the output.
    // This is ignored if value_render_option is
    // FORMATTED_VALUE.
    // The default dateTime render option is [DateTimeRenderOption.SERIAL_NUMBER].
    dateTimeRenderOption: 'SERIAL_NUMBER',

    auth: authClient,
  };

  sheets.spreadsheets.values.get(request, function(err, response) {
    if (err) {
      console.error(err);
      return;
    }

    // TODO: Change code below to process the `response` object: 
    //console.log(JSON.stringify(response, null, 2));
  });
});

function authorize(callback) {
  // TODO: Change placeholder below to generate authentication credentials. See
  // https://developers.google.com/sheets/quickstart/nodejs#step_3_set_up_the_sample
  //
  // Authorize using one of the following scopes:
  //   'https://www.googleapis.com/auth/drive'
  //   'https://www.googleapis.com/auth/drive.file'
  //   'https://www.googleapis.com/auth/drive.readonly'
  //   'https://www.googleapis.com/auth/spreadsheets'
  //   'https://www.googleapis.com/auth/spreadsheets.readonly'
  var authClient = new OAuth2(
    "336062402100-9jq7u3jd2pc6vj82m53hq9ob5javg3vt.apps.googleusercontent.com",
    "rLjaVQ4Epb9t_a7q8S8xcqu9",
    "http://localhost:3000"
  );

  var scopes = [
    'https://www.googleapis.com/auth/spreadsheets'
  ]
  if (authClient == null) {
    console.log('authentication failed');
    return;
  }
  callback(authClient);
}*/
ReactDOM.render(<Home users={users} category={category}/>, document.getElementById('root'));
//registerServiceWorker();
