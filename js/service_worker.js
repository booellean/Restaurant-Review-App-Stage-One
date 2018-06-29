document.addEventListener('DOMContentLoaded', cachePage);

// /**
// * @description handles Service Worker Registration
// */

// function swRegister(){
//   if(!navigator.serviceWorker){return};

//   navigator.serviceWorker.register('/sw.js', {
//     scope: '/'
//   }).then(
//     console.log(`I did something`)
//   );

// }

function cachePage(){
  console.log(`I'm going to cache the page!`);
}
