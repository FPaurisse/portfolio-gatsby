const initialState = {
  isLoad: true,
  isAside: null,
  darkMode: false,
  alert: { status: null, statusText: null },
};

const TOGGLE_LOAD = 'TOGGLE_LOAD';
const TOGGLE_ASIDE = 'TOGGLE_ASIDE';
const TOGGLE_DARK_MODE = 'TOGGLE_DARK_MODE';
const SHOW_ALERT = 'SHOW_ALERT';

export const toggleLoad = (isLoad) => ({
  type: TOGGLE_LOAD, isLoad,
});

export const toggleAside = (isAside) => ({
  type: TOGGLE_ASIDE, isAside,
});

export const toggleDarkMode = (darkMode) => ({
  type: TOGGLE_DARK_MODE, darkMode,
});

export const showAlert = (alert) => ({
  type: SHOW_ALERT,
  alert,
});

export default (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_LOAD:
      return { ...state, isLoad: action.isLoad };
    case TOGGLE_ASIDE:
      return { ...state, isAside: action.isAside };
    case TOGGLE_DARK_MODE:
      return { ...state, darkMode: action.darkMode };
    case SHOW_ALERT:
      return { ...state, alert: action.alert };
    default:
      return state;
  }
};
