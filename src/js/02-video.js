import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const STORAGETIME_KEY = 'videoplayer-current-time';

const lodashTrottle = require('lodash.throttle');

const iframe = document.querySelector('iframe');

const player = new Player(iframe);

player.on('timeupdate', lodashTrottle(onUpdateTimePlayer, 1000));

function onUpdateTimePlayer(data) {
  const currentTime = data.seconds;
  localStorage.setItem(STORAGETIME_KEY, currentTime);
}

const savedTime = localStorage.getItem(STORAGETIME_KEY);

try {
  player
    .setCurrentTime(savedTime)
    .then(function (seconds) {})
    .catch(function (error) {
      // an error occurred
      switch (error.name) {
        case 'RangeError':
          break;

        default:
          break;
      }
    });
} catch (error) {
  console.log(error.name);
  console.log(error.message);
}
