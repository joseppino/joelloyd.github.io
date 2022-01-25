const kick = new Audio('./media/707 Kick.flac');

document.querySelector('#kickDuck').addEventListener('click', () => {
  kick.play();
});
