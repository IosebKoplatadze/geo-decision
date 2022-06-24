import { useI18n } from '@solid-primitives/i18n';
import { For } from 'solid-js';

const EuropeHistoryLine = () => {
  const [t] = useI18n();
  const count = [...Array(17).keys()].map((i) => i + 1);

  return (
    <div className="flip px-5 sm:px-6 md:px-10 lg:px-12">
      <For each={count}>
        {(i) => (
          <span className="flex justify-center px-4 text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl">
            {t(`europe${i}`)}
          </span>
        )}
      </For>
    </div>
  );
};

export default EuropeHistoryLine;
