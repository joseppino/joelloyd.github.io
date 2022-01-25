const kick = new Audio('./media/707 Kick.flac');

document.querySelector('#kick_duck').addEventListener('click', () => {
  kick.play();
});
