import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const throttle = require('lodash.throttle');

const iframe = document.querySelector('iframe');
const player = new Vimeo.Player(iframe);

player.on(
  'timeupdate',
  onUpdateTimePlayer
  //     {
  //     duration: 61.857,
  //     percent: 0.049,
  //     seconds: 3.034,
  // })
);
function onUpdateTimePlayer() {}
