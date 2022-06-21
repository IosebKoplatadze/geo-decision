import { useI18n } from '@solid-primitives/i18n';

const LangSwitcher = () => {
  const [_, { locale }] = useI18n();

  const langChangeHandler = ({ target }) => {
    locale(target.name);
  };
  return (
    <div className="z-30 rotate-90 pointer-events-auto">
      <button name="en" onClick={langChangeHandler}>
        EN
      </button>
      |
      <button className="text-sanet" name="ka" onClick={langChangeHandler}>
        ქა
      </button>
    </div>
  );
};

export default LangSwitcher;
