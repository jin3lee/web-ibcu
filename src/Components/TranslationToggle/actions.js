import { UPDATE_LANGUAGE } from "./actionTypes";

export const updateLanguage = language => {
  return ( {
    type: UPDATE_LANGUAGE,
    language: language,
  });
}
