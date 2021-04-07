
if(chrome.storage){
  chrome.storage.local.get(['hello'], function(result) {
    console.log(result);
  });
  chrome?.storage?.local?.get(['userData', 'userEnv'], userData => {
    console.error('Got userData', userData);
  });
}
const username = document.getElementById('username');
const password = document.getElementById('password');
const btn = document.getElementById('loginButton');
const error = document.getElementById('loginGlobalErrorMessage');
username.value = 'ckdprod1';
password.value = 'Prod1prod';

const hasError = error?.style?.display !== 'none';

if(!hasError){
  btn.click();
} else {
  console.error("Auto login prevented due to error on screen");
}
