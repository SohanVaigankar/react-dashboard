import {
  ENABLE_DARK_THEME,
  ENABLE_LIGHT_THEME,
  AUTOMATIC_THEME,
  TOGGLE_THEME,
} from "./actions.type";



export const ThemeReducer = (state, action) => {
  switch (action.type) {
    case ENABLE_LIGHT_THEME:
      return { ...state, darkMode: false };
    case ENABLE_DARK_THEME:
      return { ...state, darkMode: true };
    case TOGGLE_THEME:
      
      return { ...state, darkMode: !state.darkMode };
    case AUTOMATIC_THEME:
      // pending
      return { ...state };
    default:
      return { ...state };
  }
};
