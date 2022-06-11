import clearDom from '../../helpers/clearDom';

const addVocabForm = (uid, item = {}) => {
  clearDom();

  document.querySelector('#form-container').innerHTML = `
  <div class="card form-card">
    <form id="vocab-form" class="mb-4">
        <div class="form-group">
            <label for="word">Vocab Word</label>
            <input type="text" class="form-control" id="wordForm" aria-describedby="vocabWord" placeholder="Enter Vocab Word" value="${item.vocab_word || ''}" required>
        </div>
        <div class="form-group">
            <label for="category">Language/Tech</label>
            <textarea class="form-control" placeholder="Language or Tech" id="categoryForm" style="height: auto">${item.category || ''}</textarea>
        </div>
        <div class="form-group">
            <label for="definition">Definiton</label>
            <textarea class="form-control" placeholder="Vocab Definiton" id="definitionForm" style="height: 100px">${item.vocab_defenition || ''}</textarea>
        </div>
            <button type="submit" 
            id="${item.firebaseKey ? `update-vocab--${item.firebaseKey}` : 'submit-vocab'}" class="btn btn-primary submit-btn">Submit Vocab
            </button>
    </form>
  </div>`;
};

export default addVocabForm;
