import { useI18n } from '@solid-primitives/i18n';
import LangSwitcher from './LangSwitcher';

const Footer = () => {
  const [t] = useI18n();

  return (
    <footer className="absolute top-0 right-0 h-full flex flex-col justify-center z-20  mix-blend-difference pointer-events-none">
      <div className="relative -rotate-90 -right-24 sm:-right-28 text-amber-800 flex items-center ">
        <LangSwitcher />
        <div className=" text-[8px] sm:text-[10px] ">
          <p>© 2022</p>
          <p>{t('ByIosebKoplatadze')}</p>
          <i className="text-[10px] sm:text-xs">{t('IAmGeorgian')}</i>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
