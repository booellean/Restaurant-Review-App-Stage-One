window.addEventListener('load', swRegister);

/**
* @description handles Service Worker Registration
*/

function swRegister(){
  if(!navigator.serviceWorker){return};

  navigator.serviceWorker.register('/sw.js')
  .then(function(reg){
    console.log(`I did something`);
    scope: '/';
  })
  .catch(err => {throw err});
}
