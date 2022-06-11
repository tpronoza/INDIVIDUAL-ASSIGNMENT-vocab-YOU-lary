import addVocabForm from '../components/forms/addVocabForm';
import showVocab from '../components/pages/vocab';
import {
  createVocab, updateVocab, deleteVocab, getSingleVocab, createTime
} from '../../api/vocabData';

const domEvents = (uid) => {
  document.querySelector('#main-container').addEventListener('click', (e) => {
    if (e.target.id.includes('delete-vocab')) {
      // eslint-disable-next-line no-alert
      if (window.confirm('Are you sure?')) {
        const [, firebaseKey] = e.target.id.split('--');

        deleteVocab(firebaseKey, uid).then(showVocab);
      }
    }

    if (e.target.id.includes('submit-vocab')) {
      e.preventDefault();
      const vocabObj = {
        vocab_word: document.querySelector('#wordForm').value,
        vocab_defenition: document.querySelector('#definitionForm').value,
        category: document.querySelector('#categoryForm').value,
        uid,
        timeStamp: createTime(),
      };
      createVocab(vocabObj).then((vocabArray) => showVocab(vocabArray));
    }
    if (e.target.id.includes('edit-vocab')) {
      const [, id] = e.target.id.split('--');
      getSingleVocab(id).then((vocabObj) => addVocabForm(uid, vocabObj));
    }

    if (e.target.id.includes('update-vocab')) {
      e.preventDefault();
      const [, firebaseKey] = e.target.id.split('--');
      const vocabObject = {
        vocab_word: document.querySelector('#wordForm').value,
        vocab_defenition: document.querySelector('#definitionForm').value,
        category: document.querySelector('#categoryForm').value,
        firebaseKey,
        uid
      };
      updateVocab(vocabObject).then(showVocab);
    }
  });
};

export default domEvents;
