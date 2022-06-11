// USE WITH FIREBASE AUTH
import checkLoginStatus from './helpers/auth';
import 'bootstrap'; // import bootstrap elements and js
import '../styles/main.scss';

const init = () => {
  document.querySelector('#app').innerHTML = `
    <h1>Welcome to Voca-YOU-Lay!</h1>
  `;
  // console.warn('YOU ARE UP AND RUNNING!');
  checkLoginStatus();

  // document
  //   .querySelector('#click-me')
  //   .addEventListener('click', () => console.warn('You clicked that button!'));

  // USE WITH FIREBASE AUTH
  // checkLoginStatus();
};

init();
