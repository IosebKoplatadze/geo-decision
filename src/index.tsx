import { render } from 'solid-js/web';
import App from './App';
import './index.scss';
import { I18nContext, createI18nContext } from '@solid-primitives/i18n';

const dict = {
  ka: {
    europe: 'ევროპა',
    oligarchy: 'ოლიგარქია',
    USSR: 'სსრკ',
    ByIosebKoplatadze: 'by იოსებ კოპლატაძე',
    IAmGeorgian: 'მე ვარ ქართველი, მაშასადამე ვარ ევროპელი',
  },
  en: {
    europe: 'EUROPE',
    oligarchy: 'OLIGARCHY',
    USSR: 'USSR',
    ByIosebKoplatadze: 'By Ioseb Koplatadze',
    IAmGeorgian: "I'm Georgian, and therefore I am European",
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
