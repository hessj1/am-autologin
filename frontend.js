console.info('front end loaded...');
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

