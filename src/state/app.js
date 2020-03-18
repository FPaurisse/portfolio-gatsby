const initialState = {
  isContact: false,
  isTerms: false,
};

const TOGGLE_CONTACT = 'TOGGLE_CONTACT';
const TOGGLE_TERMS = 'TOGGLE_TERMS';
const RESET = 'RESET';

export const toggleContact = (isContact) => ({
  type: TOGGLE_CONTACT, isContact,
});

export const toggleTerms = (isTerms) => ({
  type: TOGGLE_TERMS, isTerms,
});

export const reset = () => {
  toggleContact(false);
  toggleTerms(false);
};

export default (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_CONTACT:
      return { ...state, isContact: action.isContact };
    case TOGGLE_TERMS:
      return { ...state, isTerms: action.isTerms };
    case RESET:
      return { ...state, reset: action.reset };
    default:
      return state;
  }
};
