if(document.location.href .includes('aetna.com/AccountManager')) {

}
console.error('front end loaded...');
if(chrome.storage){
  chrome.storage.local.get(['hello'], function(result) {
    console.log(result);
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
  console.error('button Click', error);
  btn.click();
} else {
  console.error({error: error});
}
