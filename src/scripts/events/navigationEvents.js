import showVocab from '../components/pages/vocab';
import { filterVocabLang, filterVocabTech, getVocab } from '../../api/vocabData';
import addVocabForm from '../components/forms/addVocabForm';

const navigationEvents = (uid) => {
  // will display all Vocab Per UID
  document.querySelector('#all-vocab').addEventListener('click', () => {
    getVocab(uid).then(showVocab);
  });
  // Add Vocab Form
  document.querySelector('#add-vocab').addEventListener('click', () => {
    addVocabForm(uid);
  });
  // Filter Language Vocab
  document.querySelector('#lang-vocab').addEventListener('click', () => {
    filterVocabLang(uid).then(showVocab);
  });
  document.querySelector('#tech-vocab').addEventListener('click', () => {
    filterVocabTech(uid).then(showVocab);
  });
};

export default navigationEvents;
