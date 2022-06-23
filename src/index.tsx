import { render } from 'solid-js/web';
import App from './App';
import './index.scss';
import { I18nContext, createI18nContext } from '@solid-primitives/i18n';

const dict = {
  ka: {
    europe: 'ევროპა',
    oligarchy: 'ოლიგარქია',
    USSR: 'სსრკ',
    ByIosebKoplatadze: 'By იოსებ კოპლატაძე',
    IAmGeorgian: 'მე ვარ ქართველი, მაშასადამე ვარ ევროპელი',
    whatIsYourDecision: 'რა არის შენი არჩევანი?',
  },
  en: {
    europe: 'EUROPE',
    oligarchy: 'OLIGARCHY',
    USSR: 'USSR',
    ByIosebKoplatadze: 'By Ioseb Koplatadze',
    IAmGeorgian: "I'm Georgian, and therefore I am European",
    whatIsYourDecision: 'What is your Decision?',
  },
};
const value = createI18nContext(dict, 'en');

render(
  () => (
    <I18nContext.Provider value={value}>
      <App />
    </I18nContext.Provider>
  ),
  document.getElementById('root')!
);
