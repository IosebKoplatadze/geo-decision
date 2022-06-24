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
    europe1: 'ევროკავშირის წევრობის კანდიდატის სტატუსი',
    europe2: 'სასამართლოს რეფორმა',
    europe3: 'მრავალპარტიული მთავრობა',
    europe4: 'ეკონომიკური რეფორმები',
    europe5: 'ევროკავშირის წევრობა',
    europe6: 'ორნიშნა ეკონომიკური ზრდა',
    europe7: 'გაორმაგებული მშპ',
    europe8: 'ვიღებთ NATO-ს მაპს',
    europe9: 'მოლაპარაკებები აფხაზეთის და სამხრეთოსეთის დეფაქტო მთავრობებთან',
    europe10: 'ვხვდებით NATO-ს წევრები, აფხაზეთის და სამაჩაბლოს გარეშე',
    europe11: 'აფხაზეთთან მოლაპარაკებები წარმატებით მიმდინარეობს',
    europe12: 'ორმხრივად აღსდგა აფხაზეთთან სახმელეთო მიმოსვლა',
    europe13:
      'აფხაზეთი უერთდება საქართველოს და იქმნება საქართველოს ფედერაციული რესპუბლიკა',
    europe14: 'სამაჩაბლო უერთდება საქართველოს',
    europe15: 'ათასობით ემიგრანტები ბრუნდებიან ქვეყანაში',
    europe16: 'საქართველოს მოსახლეობა აღწევს 5 მილიონს',
    europe17: 'გასამმაგებული მშპ',
  },
  en: {
    europe: 'EUROPE',
    oligarchy: 'OLIGARCHY',
    USSR: 'USSR',
    ByIosebKoplatadze: 'By Ioseb Koplatadze',
    IAmGeorgian: "I'm Georgian, and therefore I am European",
    whatIsYourDecision: 'What is your Decision?',
    europe1: 'EU candidate status',
    europe2: 'Judicial reform',
    europe3: 'Multiparty government',
    europe4: 'Economic reforms',
    europe5: 'EU membership',
    europe6: 'Double-digit economic growth',
    europe7: 'Doubled GDP',
    europe8: 'Get the NATO map',
    europe9:
      'Negotiations with the de facto governments of Abkhazia and South Ossetia',
    europe10: 'Become NATO member, without Abkhazia and Samachablo',
    europe11: 'Negotiations with Abkhazia is going successfully',
    europe12: 'Abkhazian border was opened bilaterally',
    europe13:
      'Abkhazia joins Georgia and the Federal Republic of Georgia is created',
    europe14: 'Samachablo joins Georgia',
    europe15: 'Thousands of immigrants are returning to the country',
    europe16: 'The population of Georgia reaches 5 million',
    europe17: 'Triple GDP',
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
