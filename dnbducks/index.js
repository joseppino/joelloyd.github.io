const kick = new Audio('./media/707 Kick.flac');
const snare = new Audio('./media/808 Snare.flac');
const hat = new Audio('./media/808 ClosedHat.flac');
const cowbell = new Audio('./media/808 Cowbell.flac');

const kickDuck = document.querySelector('#kick_duck');
const snareDuck = document.querySelector('#snare_duck');
const hatDuck = document.querySelector('#hat_duck');
const cowbellDuck = document.querySelector('#cowbell_duck');

kickDuck.addEventListener('click', () => {
  kick.play();
});

snareDuck.addEventListener('click', () => {
  snare.play();
});

hatDuck.addEventListener('click', () => {
  hat.play();
});

cowbellDuck.addEventListener('click', () => {
  cowbell.play();
});