import { useI18n } from '@solid-primitives/i18n';
import { Component } from 'solid-js';
import Bounce from './components/Bounce';
import Footer from './components/Footer';

const App: Component = () => {
  const [t, { locale }] = useI18n();

  return (
    <div className="relative h-screen flex flex-col justify-between font-mono overflow-hidden min-h-[640px]">
      <button className="h-1/2 bg-gradient-to-t from-[#91bdf5] to-indigo-900 text-white relative cursor-n-resize text-5xl  sm:text-7xl md:text-8xl text-sanet">
        <span className="absolute -translate-x-1/2">{t('europe')}</span>
        <img
          src="./tbilisi.svg"
          className="absolute top-0 rotate-180 scale-110"
        />
      </button>

      <div className="relative sm:h-52 h-32">
        <div class="ocean2 z-10">
          <div class="wave2"></div>
          <div class="wave2"></div>
          <div class="wave2"></div>
        </div>
        <div class="ocean z-10" style="filter: contrast(3);">
          <div class="wave"></div>
          <div class="wave"></div>
          <div class="wave"></div>
        </div>
      </div>

      <button
        className={
          'h-1/2 relative bg-gradient-to-b from-[#531212] to-red-900 cursor-s-resize ' +
          (locale() === 'ka'
            ? 'text-sanet text-5xl  sm:text-7xl md:text-8xl'
            : 'text-barbed text-4xl sm:text-6xl md:text-7xl')
        }
        style="filter: contrast(3); line-height: inherit;"
      >
        <div className="relative text-[#FF0000] ">
          <span className="absolute word -translate-x-1/2 bottom-0">
            {t('oligarchy')}
          </span>
          <span className="absolute word -translate-x-1/2 bottom-0">
            {t('USSR')}
          </span>
        </div>
        <img src="./war.svg" className="absolute bottom-0" />
      </button>
      <Bounce>{t('whatIsYourDecision?')}</Bounce>
      <Footer />
    </div>
  );
};

export default App;
