const initialState = {
  isContact: false,
};

const TOGGLE_CONTACT = 'TOGGLE_CONTACT';

export const toggleContact = (isContact) => ({
  type: TOGGLE_CONTACT, isContact,
});

export default (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_CONTACT:
      return { ...state, isContact: action.isContact };
    default:
      return state;
  }
};
