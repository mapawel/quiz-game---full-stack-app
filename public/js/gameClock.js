(clockFn = () => {
let clockTipElement;
let gameTimeTxt;
let interval;
const MAX_ANSWER_TIME = 60000 // TO CHECK WITH SERVER-CODE, MILLIS
let startTime = Date.now();


const moveTip = (time) => {
  const moveAngle = time / MAX_ANSWER_TIME * 360;
  clockTipElement.style.transformOrigin = '50% 86.2%';
  clockTipElement.style.transition = 'transform .2s cubic-bezier(0.84, 1.82, 0.54, 0.74';
  clockTipElement.style.transform = `translateX(-50%) rotate(-${moveAngle}deg)  `;
}

const changeTimeTxt = (time) => {
  const now = moment();
  const startTime = moment(gameTimeTxt.dataset.gamestarttime, "x");
  gameTimeTxt.innerText = moment(now - startTime).format("mm:ss")
}
const finishGame = () => {
  window.location.href = '/game/finish?timeout=true';
}

const changeTime = () => {
  time = Date.now() - startTime;
  moveTip(time);
  changeTimeTxt(time)
  if (time >= 60000) finishGame()
}




const prepareDOMelements = () => {
  clockTipElement = document.querySelector('.clock-tip')
  gameTimeTxt = document.getElementById('gameTime')
}

const start = () => {
  gameTimeTxt.innerText = moment(Date.now() - gameTimeTxt.dataset.gamestarttime).format("mm:ss")
  interval = window.setInterval(changeTime, 1000)
}

const main = () => {
  prepareDOMelements();
  start();
}

document.addEventListener('DOMContentLoaded', main)
})()