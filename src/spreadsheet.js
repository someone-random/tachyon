/*import React from 'react'
import config from './config'

export function checkAuth(immediate, callback) {
  window.gapi.auth.authorize({
    'client_id': config.clientId,
    'scope': config.scope,
    'immediate': immediate
  }, callback);

export function load(callback){
    window.gapi.client.load('sheets','v4', () => {
      window.gapi.client.sheets.spreadsheets.values.get({
        spreadsheetId: config.spreadsheetId,
        range: 'A2:B'
      }).then((response) => {
        const data = response.result.values || []
      })
    })
  }}*/