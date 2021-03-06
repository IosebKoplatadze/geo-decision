import { useI18n } from '@solid-primitives/i18n';

const LangSwitcher = () => {
  const [_, { locale }] = useI18n();

  const onLangChange = ({ target }) => {
    locale(target.name);
  };
  return (
    <div className="z-30 rotate-90 pointer-events-auto p-2">
      {locale() !== 'en' && (
        <button name="en" onClick={onLangChange}>
          EN
        </button>
      )}

      {locale() !== 'ka' && (
        <button className="text-sanet" name="ka" onClick={onLangChange}>
          ქა
        </button>
      )}
    </div>
  );
};

export default LangSwitcher;
