import { useI18n } from '@solid-primitives/i18n';
import { createSignal, onCleanup, onMount } from 'solid-js';
import { Decision } from '../App';
import Flip from './Flip';

const GeoMap = (props: { decision: Decision; finished: () => void }) => {
  const [t] = useI18n();
  const [year, setYear] = createSignal(2022);
  let countdown;

  onMount(() => {
    countdown = setInterval(() => {
      setYear((prev) => {
        if (prev === 2039) {
          props.finished();
        }
        return prev + 1;
      });
    }, 2500);
  });

  onCleanup(() => {
    clearInterval(countdown);
  });

  return (
    <div
      className={`flex flex-col items-center absolute w-full h-1/2 ${
        props.decision === Decision.Europe ? 'top-0' : 'bottom-0'
      }`}
    >
      <div className="relative flex justify-center w-full h-full">
        <div className="flex justify-center absolute h-full pointer-events-none">
          <Flip
            className={`line-inherit mix-blend-color-dodge text-2xl xs:text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl translate-y-1/2 ${
              props.decision === Decision.Oligarchy && 'oligarchy'
            }`}
          >
            {year()}
          </Flip>
        </div>
        <div className="map absolute h-full"></div>
      </div>
    </div>
  );
};

export default GeoMap;
