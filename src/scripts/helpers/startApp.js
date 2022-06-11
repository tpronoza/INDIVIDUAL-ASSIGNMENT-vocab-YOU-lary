import { getVocab } from '../../api/vocabData';
import showVocab from '../components/pages/vocab';
import logoutButton from '../components/logoutButton';
import domBuilder from '../components/domBuilder';
import navBar from '../components/navBar';
import domEvents from '../events/domEvents';
// import formEvents from '../events/formEvents';
import navigationEvents from '../events/navigationEvents';

const startApp = (user) => {
  domBuilder(); // BUILD THE DOM
  domEvents(user.uid); // ADD THE EVENT LISTENTERS TO THE DOM
  // formEvents(user.uid); // ADD FORM EVENT LISTENTERS TO THE DOM
  navBar(); // DYNAMICALLY ADD THE NAV
  logoutButton(); // ADD THE LOGOUT BUTTON COMPONENT
  navigationEvents(user.uid); // ATTACH THE EVENT LISTENERS TO THE NAVBAR

  // TODO: Put all books on the DOM on App load
  getVocab(user.uid).then((vocabArray) => showVocab(vocabArray));
};

export default startApp;
