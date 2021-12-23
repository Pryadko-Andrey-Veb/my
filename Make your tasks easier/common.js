const root = document.documentElement;
const darkBackground = '#2b2b2b';
const lightBackgrond = '#fafafa';
const darkText = '#424242';
const lightText = '#fff';

// document.querySelector('body').addEventListener('click', () => {
//   if (document.body.classList.contains('dark-theme')) {
//     root.style.setProperty('--theme-background', lightBackgrond);
//     root.style.setProperty('--theme-text', darkText);
//     document.body.classList.remove('dark-theme');
//     document.body.classList.add('light-theme');
//   } else {
//     root.style.setProperty('--theme-background', darkBackground);
//     root.style.setProperty('--theme-text', lightText);
//     document.body.classList.add('dark-theme');
//     document.body.classList.remove('light-theme');
//   }
// });

// video playing

const videoPlay = document.querySelector('.video-controller--play');
const videoPause = document.querySelector('.video-controller--pause');
const video = document.querySelector('.video');
const barline = document.querySelector('.bar__line');

videoPlay.addEventListener('click', () => {
    video.play();
    videoPlay.style.display = 'none';
    videoPause.style.display = 'block';
  });

  videoPause.addEventListener('click', () => {
    video.pause();
    videoPause.style.display = 'none';
    videoPlay.style.display = 'block';
  });

  video.ontimeupdate = function () {
    // console.log(video.currentTime);
    let percentage = (video.currentTime / video.duration) *100;
    console.log(percentage);

    barline.style.width = percentage + '%';
  };

  // menu
  const burger = document.querySelector('.burger');
  const menu = document.querySelector('.menu');
  const close = document.querySelector('.close');
  const body = document.body;

  let keys = {
    ESC: 27,
  };

  function closeMenu() {
    menu.classList.remove('menu--showed');
    body.style.overflow = 'initial';

    document.addEventListener('keydown', function(e){
      console.log(e)
      if (e.keyCode == keys.ESC) {
        closeMenu();
      }
    });
  }

  function showMenu() {
    menu.classList.add('menu--showed');
    body.style.overflow = 'hidden';
  }

  burger.addEventListener('click', showMenu);
  close.addEventListener('click', closeMenu);

