import { useI18n } from '@solid-primitives/i18n';
import { Component, createSignal } from 'solid-js';
import Bounce from './components/Bounce';
import Footer from './components/Footer';

const App: Component = () => {
  const [t, { locale }] = useI18n();
  const [side, setSide] = createSignal();

  const onSideChange = ({ currentTarget }) => {
    setSide(Number(currentTarget.name));
  };

  return (
    <div className="relative h-screen flex flex-col justify-between font-mono overflow-hidden min-h-[640px]">
      <button
        name="1"
        onClick={onSideChange}
        className={
          'cursor-n-resize transition-all ease-linear ' +
          (side() === 1 ? 'h-[90%]' : side() === -1 ? 'h-[10%]' : 'h-1/2')
        }
      >
        <div className="h-[90%] bg-gradient-to-t from-[#91bdf5] to-indigo-900 text-white text-5xl  sm:text-7xl md:text-8xl text-sanet">
          {side() !== -1 && (
            <div className="h-2/3 w-full tbilisi bg-contain lg:bg-cover rotate-180 scale-110"></div>
          )}
          <span>{t('europe')}</span>
        </div>
        <div class="ocean2">
          <div class="wave2"></div>
          <div class="wave2"></div>
          <div class="wave2"></div>
        </div>
      </button>

      <button
        className={
          'cursor-s-resize transition-all ease-linear ' +
          (side() === -1 ? 'h-[90%]' : side() === 1 ? 'h-[10%]' : 'h-1/2')
        }
        style="filter: contrast(3); line-height: inherit;"
        name="-1"
        onClick={onSideChange}
      >
        <div class="ocean" style="filter: contrast(3);">
          <div class="wave"></div>
          <div class="wave"></div>
          <div class="wave"></div>
        </div>
        <div className="h-[90%] bg-gradient-to-b from-[#531212] to-red-900 flex flex-col-reverse">
          {side() !== 1 && (
            <div className="h-2/3 w-full war bg-contain md:bg-cover"></div>
          )}
          <div
            className={
              'relative text-[#FF0000] ' +
              (locale() === 'ka'
                ? 'text-sanet text-5xl  sm:text-7xl md:text-8xl'
                : 'text-barbed text-4xl sm:text-6xl md:text-7xl')
            }
          >
            <span className="word">{t('oligarchy')}</span>
            <span className="absolute word -translate-x-1/2 left-1/2">
              {t('USSR')}
            </span>
          </div>
        </div>
      </button>
      <Bounce>{t('whatIsYourDecision')}</Bounce>
      <Footer />
    </div>
  );
};

export default App;
