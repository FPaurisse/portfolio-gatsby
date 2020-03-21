const initialState = {
  isLoad: true,
  isContact: false,
  isTerms: false,
  isCredits: false,
  alert: { status: null, statusText: null },
};

const TOGGLE_LOAD = 'TOGGLE_LOAD';
const TOGGLE_CONTACT = 'TOGGLE_CONTACT';
const TOGGLE_TERMS = 'TOGGLE_TERMS';
const TOGGLE_CREDITS = 'TOGGLE_CREDITS';
const SHOW_ALERT = 'SHOW_ALERT';

export const toggleLoad = (isLoad) => ({
  type: TOGGLE_LOAD, isLoad,
});

export const toggleContact = (isContact) => ({
  type: TOGGLE_CONTACT, isContact,
});

export const toggleTerms = (isTerms) => ({
  type: TOGGLE_TERMS, isTerms,
});

export const toggleCredits = (isCredits) => ({
  type: TOGGLE_CREDITS, isCredits,
});

export const showAlert = (alert) => ({
  type: SHOW_ALERT,
  alert,
});

export default (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_LOAD:
      return { ...state, isLoad: action.isLoad };
    case TOGGLE_CONTACT:
      return { ...state, isContact: action.isContact };
    case TOGGLE_TERMS:
      return { ...state, isTerms: action.isTerms };
    case TOGGLE_CREDITS:
      return { ...state, isCredits: action.isCredits };
    case SHOW_ALERT:
      return { ...state, alert: action.alert };
    default:
      return state;
  }
};
