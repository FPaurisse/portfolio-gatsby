const initialState = {
  isContact: false,
  isTerms: false,
  alert: { status: null, statusText: null },
};

const TOGGLE_CONTACT = 'TOGGLE_CONTACT';
const TOGGLE_TERMS = 'TOGGLE_TERMS';
const SHOW_ALERT = 'SHOW_ALERT';

export const toggleContact = (isContact) => ({
  type: TOGGLE_CONTACT, isContact,
});

export const toggleTerms = (isTerms) => ({
  type: TOGGLE_TERMS, isTerms,
});

export const showAlert = (alert) => ({
  type: SHOW_ALERT,
  alert,
});

export default (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_CONTACT:
      return { ...state, isContact: action.isContact };
    case TOGGLE_TERMS:
      return { ...state, isTerms: action.isTerms };
    case SHOW_ALERT:
      return { ...state, alert: action.alert };
    default:
      return state;
  }
};
