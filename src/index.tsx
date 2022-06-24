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
    europe15: 'ათასობით ემიგრანტი ბრუნდება ქვეყანაში',
    europe16: 'უმუშევრობამ მიაღწია რეკორდულ მინიმუმს',
    europe17: 'საქართველოს მოსახლეობა აღწევს 5 მილიონს',
    europe18: 'გასამმაგებული მშპ',
    oligarchy1: 'არ მოგვცეს ევროკავშირის კანდიდატის სტატუსი',
    oligarchy2:
      'აქციების დროს ათობით ადამიანი დასახიჩრდა, მთავრობა ოპოზიციაას ადანაშაულებს',
    oligarchy3: 'გაყალბაბული საპარლამენტო არჩევნები',
    oligarchy4: 'საკონსტიტუციო უმრავლესობა ერთი პარტიის ხელში',
    oligarchy5: 'სამხრეთ ოსეთში ტარდება რეფერენდუმი რუსეთთან მიერთების შესახებ',
    oligarchy6: 'სამხრეთ ოსეთი უერთდება რუსეთს',
    oligarchy7: 'ინფლაქციამ მიაღწია ისტორიულ მაქსიმუმს',
    oligarchy8: 'ხალხი უშედეგოდ აპროტესტებს გაუსაძლის სოციალურ მდგომარეობას',
    oligarchy9: 'ათი-ათასობით ადამიანი ტოვებს ყოველწლიურად საქართველოს',
    oligarchy10: 'აფხაზეთი უერთდება რუსეთს',
    oligarchy11: 'ქვეყანაში კვლავ არეულობაა, სპეცრაზმი ხალხს არბევს',
    oligarchy12: 'უკრაინა ხდება NATO-ს წევრი',
    oligarchy13:
      'ოკუპირებულ ტერიტორიებზე(რუსეთი) იწყება ფართო მასშტაბიანი სამხედრო წვრთნები',
    oligarchy14: 'რუსული ტანკები შედიან ერთდროულად ონში და სტეფანწმინდაში',
    oligarchy15: 'მთავრობა უმოქმედოდაა, მოსახლეობა იწყებს პარტიზანულ ომს',
    oligarchy16:
      'თბილისი დაეცა, პარლამენტის შენობასთან ასობით ადამიანის გვამია',
    oligarchy17: 'მოსახლეობა მეზობელ ქვეყნებში გარბის',
    oligarchy18:
      'სრული  აღრიცხვით, საქართველოს მოსახლეობა შეადგენს 2.9 მილიონ ადამიანს',
    finalWord:
      'შენ გაქვს ძალიან მცირე დრო გადაწყვეტილების მისაღებად, და მხოლოდ 6 თვე სამოქმედოდ, გააკეთე ის რაც შეგიძლია, ჩვენი ქვეყნის მომავალი წყდება ახლა',
    d: 'დ:',
    h: 'სთ:',
    m: 'წთ:',
    s: 'წმ:',
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
    europe16: 'Unemployment has reached a record low',
    europe17: 'The population of Georgia reaches 5 million',
    europe18: 'Triple GDP',
    oligarchy1: 'WE COULD NOT GET EU CANDIDATE STATUS',
    oligarchy2:
      'DOZENS OF PEOPLE WERE INJURED DURING THE PROTESTS. THE GOVERNMENT BLAMES THE OPPOSITION',
    oligarchy3: 'RIGGED PARLIAMENTARY ELECTIONS',
    oligarchy4: 'THE CONSTITUTIONAL MAJORITY IS IN THE HANDS OF ONE PARTY',
    oligarchy5: 'SOUTH OSSETIA HOLDS REFERENDUM ON JOINING RUSSIA',
    oligarchy6: 'SOUTH OSSETIA JOINS RUSSIA',
    oligarchy7: 'INFLATION HAS REACHED AN ALL-TIME HIGH',
    oligarchy8:
      'PEOPLE ARE PROTESTING IN VAIN AGAINST THE UNBEARABLE SOCIAL SITUATION',
    oligarchy9: 'TENS OF THOUSANDS OF PEOPLE LEAVE GEORGIA EVERY YEAR',
    oligarchy10: 'ABKHAZIA JOINS RUSSIA',
    oligarchy11:
      'THERE IS STILL UNREST IN THE COUNTRY, THE SPECIAL FORCES ARE BOTHERING THE POPULATION',
    oligarchy12: 'UKRAINE BECOMES A MEMBER OF NATO',
    oligarchy13:
      'LARGE-SCALE MILITARY EXERCISES BEGIN IN THE OCCUPIED TERRITORIES (RUSSIA)',
    oligarchy14: 'RUSSIAN TANKS ENTER ONI AND STEPHANTSMINDA AT THE SAME TIME',
    oligarchy15:
      'THE GOVERNMENT IS INACTIVE, THE POPULATION STARTS A PARTISAN WAR',
    oligarchy16:
      'TBILISI FELL, THE CORPSES OF HUNDREDS OF PEOPLE NEAR THE PARLIAMENT BUILDING',
    oligarchy17: 'THE POPULATION IS FLEEING TO NEIGHBORING COUNTRIES',
    oligarchy18:
      'ACCORDING TO THE FULL CENSUS, THE POPULATION OF GEORGIA IS 2.9 MILLION PEOPLE',
    finalWord:
      'You have very little time to make a decision, and only 6 months to act, do what you can, the future of our country is made now, ',
    d: 'D:',
    h: 'H:',
    m: 'M:',
    s: 'S:',
  },
};
const value = createI18nContext(dict, 'ka');

render(
  () => (
    <I18nContext.Provider value={value}>
      <App />
    </I18nContext.Provider>
  ),
  document.getElementById('root')!
);
