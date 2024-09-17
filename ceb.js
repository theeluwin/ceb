// ==UserScript==
// @name chess-elo-booster
// @namespace https://github.com/theeluwin/ceb
// @version 0.1.0
// @description boost your chess elo!
// @author theeluwin
// @match *.chess.com/game/*
// @downloadURL https://rawgit.com/theeluwin/ceb/main/ceb.user.js
// @updateURL https://rawgit.com/theeluwin/ceb/main/ceb.user.js
// @copyright 2024+, theeluwin
// @run-at document-end
// @grant none
// ==/UserScript==

function ceb() {
  let box = document.getElementsByClassName('resign-button-component')[0]
  if(box) {
    box.remove()
  }
}

(function(){
  'use strict'
  setInterval(ceb, 1000)
})()
