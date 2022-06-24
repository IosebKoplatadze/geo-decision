import { useI18n } from '@solid-primitives/i18n';
import { createSignal, onCleanup, onMount } from 'solid-js';
import { Decision } from '../App';
import Flip from './Flip';

const GeoMap = (props: { decision: Decision }) => {
  const [t] = useI18n();
  const [year, setYear] = createSignal(2022);
  let countdown;

  onMount(() => {
    countdown = setInterval(() => {
      setYear((prev) => prev + 1);
    }, 2000);
  });

  onCleanup(() => {
    clearInterval(countdown);
  });

  return (
    <div
      className={`flex flex-col items-center absolute w-full h-full ${
        props.decision === Decision.Europe ? '-top-1/2' : 'top-1/2'
      }`}
    >
      <div className="flex justify-center absolute top-1/2  h-full w-full pointer-events-none">
        <Flip
          className={`mix-blend-color-dodge text-xs xs:text-xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl ${
            props.decision === Decision.Oligarchy && 'oligarchy'
          } ${
            props.decision === Decision.Europe
              ? 'translate-y-1/2'
              : '-translate-y-1/2'
          }`}
        >
          {year()}
        </Flip>
      </div>
      <div
        className={`map ${
          props.decision === Decision.Europe
            ? 'translate-y-1/2'
            : '-translate-y-1/2'
        }`}
      ></div>
    </div>
  );
};

export default GeoMap;
