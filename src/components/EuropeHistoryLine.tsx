import { useI18n } from '@solid-primitives/i18n';

const EuropeHistoryLine = () => {
  const [t] = useI18n();

  return (
    <div className="flip">
      <span className="flex justify-center px-4 text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl">
        Get Euro Union candidat <br />
        status
      </span>
      <span className="flex justify-center px-4 text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl">
        Join Euro Union
      </span>
      <span className="flex justify-center px-4 text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl">
        Economy is rising
      </span>
    </div>
  );
};

export default EuropeHistoryLine;
