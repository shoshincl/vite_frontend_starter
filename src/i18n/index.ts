import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import esCL from './locales/es-CL/translations.json';

export const defaultNS = 'esCL';

export const resources = {
  esCL: { esCL },
} as const;

i18n.use(initReactI18next).init({
  lng: 'esCL',
  ns: [defaultNS],
  defaultNS,
  resources,
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
