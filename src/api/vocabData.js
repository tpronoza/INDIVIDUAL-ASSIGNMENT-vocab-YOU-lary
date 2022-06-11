import axios from 'axios';
import firebaseConfig from './apiKeys';

const dbUrl = firebaseConfig.databaseURL;

// GET vocab
const getVocab = (userId) => new Promise((resolve, reject) => {
  axios.get(`${dbUrl}/vocab.json?orderBy="uid"&equalTo="${userId}"`)
    .then((response) => resolve(Object.values(response.data)))
    .catch((error) => reject(error));
});

// CREATE vocab
const createVocab = (vocabObj) => new Promise((resolve, reject) => {
  axios.post(`${dbUrl}/vocab.json`, vocabObj)
    .then((response) => {
      const body = { firebaseKey: response.data.name };
      axios.patch(`${dbUrl}/vocab/${response.data.name}.json`, body)
        .then(() => {
          getVocab(vocabObj.uid).then(resolve);
        });
    }).catch((error) => reject(error));
});

// UPDATE Vocab
const updateVocab = (vocabObj) => new Promise((resolve, reject) => {
  axios.patch(`${dbUrl}/vocab/${vocabObj.firebaseKey}.json`, vocabObj)
    .then(() => getVocab(vocabObj.uid).then(resolve))
    .catch(reject);
});

// DELETE Vocab
const deleteVocab = (firebaseKey, uid) => new Promise((resolve, reject) => {
  axios.delete(`${dbUrl}/vocab/${firebaseKey}.json`)
    .then(() => {
      getVocab(uid).then(resolve);
    })
    .catch(reject);
});
// Get Single Vocab Word
const getSingleVocab = (firebaseKey) => new Promise((resolve, reject) => {
  axios.get(`${dbUrl}/vocab/${firebaseKey}.json`)
    .then((response) => resolve(response.data))
    .catch(reject);
});
// Filters Vocab by Language
const filterVocabLang = (uid) => new Promise((resolve, reject) => {
  getVocab(uid)
    .then((userVocabArray) => {
      const filterLang = userVocabArray.filter((vocab) => vocab.category.includes('L' || 'l'));
      resolve(filterLang);
    }).catch(reject);
});
const filterVocabTech = (uid) => new Promise((resolve, reject) => {
  getVocab(uid)
    .then((userVocabArray) => {
      const filterTech = userVocabArray.filter((vocab) => vocab.category.includes('T' || 't'));
      resolve(filterTech);
    }).catch(reject);
});

const savedCards = () => new Promise((resolve, reject) => {
  axios
    .get(`${dbUrl}/cards.json?orderBy="saved"&equalTo=true`)
    .then((response) => resolve(Object.values(response.data)))
    .catch((error) => reject(error));
});

const createTime = () => {
  const date = new Date();
  return date;
};

export {
  getVocab,
  createVocab,
  updateVocab,
  deleteVocab,
  getSingleVocab,
  filterVocabLang,
  filterVocabTech,
  createTime,
  savedCards
};
