import { useI18n } from '@solid-primitives/i18n';
import { Component, createSignal } from 'solid-js';
import Bounce from './components/Bounce';
import EuropeHistoryLine from './components/EuropeHistoryLine';
import Footer from './components/Footer';
import GeoMap from './components/GeoMap';

export enum Decision {
  Oligarchy = -1,
  None,
  Europe,
}

const App: Component = () => {
  const [t, { locale }] = useI18n();
  const [decision, setDecision] = createSignal(Decision.None);

  const onDecisionChange = ({ currentTarget }) => {
    setDecision(Number(currentTarget.name));
  };

  return (
    <div className="relative h-screen flex flex-col justify-between font-mono overflow-hidden">
      <button
        name={Decision.Europe}
        onClick={onDecisionChange}
        className={
          'cursor-n-resize transition-all ease-linear ' +
          (decision() === Decision.Europe
            ? 'h-[85%]'
            : decision() === Decision.Oligarchy
            ? 'h-[15%]'
            : 'h-1/2')
        }
      >
        <div
          className={
            'bg-gradient-to-t from-[#91bdf5] to-indigo-900 text-white text-5xl  sm:text-7xl md:text-8xl text-sanet ' +
            (decision() === Decision.Oligarchy ? 'h-[70%]' : 'h-[90%]')
          }
        >
          {decision() !== Decision.Oligarchy && (
            <div className="h-2/3 w-full tbilisi bg-contain rotate-180 scale-110"></div>
          )}

          {decision() === Decision.Europe ? (
            <>
              <GeoMap decision={decision()} />
              <EuropeHistoryLine />
            </>
          ) : (
            <span>{t('europe')}</span>
          )}
        </div>
        <div
          className={
            'w-full overflow-x-hidden rotate-180 ' +
            (decision() === Decision.Oligarchy ? 'h-[30%]' : 'h-[10%]')
          }
        >
          <div className="wave2"></div>
          <div className="wave2"></div>
          <div className="wave2"></div>
        </div>
      </button>
      <button
        className={
          'cursor-s-resize transition-all ease-linear ' +
          (decision() === Decision.Oligarchy
            ? 'h-[85%]'
            : decision() === Decision.Europe
            ? 'h-[15%]'
            : 'h-1/2')
        }
        // style="filter: contrast(3); line-height: inherit;"
        name={Decision.Oligarchy}
        onClick={onDecisionChange}
      >
        <div
          className={
            'w-full overflow-x-hidden relative ' +
            (decision() === Decision.Europe ? 'h-[30%]' : 'h-[10%]')
          }
        >
          <div className="wave"></div>
          <div className="wave"></div>
          <div className="wave"></div>
        </div>
        <div
          className={`bg-gradient-to-b to-[#531212] from-black flex flex-col-reverse text-[#FF0000] 
          ${decision() === Decision.Europe ? 'h-[70%]' : 'h-[90%]'} 
          ${
            locale() === 'ka' || decision() === Decision.Oligarchy
              ? 'text-sanet text-5xl sm:text-7xl md:text-8xl'
              : 'text-barbed text-4xl sm:text-6xl md:text-7xl'
          }`}
        >
          {decision() !== Decision.Europe && (
            <div className="h-2/3 w-full war bg-contain lg:bg-cover"></div>
          )}

          {decision() === Decision.Oligarchy ? (
            <GeoMap decision={decision()} />
          ) : (
            <div className="relative">
              <span className="word">{t('oligarchy')}</span>
              <span className="absolute word -translate-x-1/2 left-1/2">
                {t('USSR')}
              </span>
            </div>
          )}
        </div>
      </button>
      {!decision() && <Bounce>{t('whatIsYourDecision')}</Bounce>}
      <Footer />
    </div>
  );
};

export default App;
