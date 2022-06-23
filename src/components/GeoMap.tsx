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
    <div className="flex flex-col items-center relative">
      <div className="flex justify-center h-28">
        <Flip
          className={`mix-blend-color-dodge ${
            props.decision === Decision.Oligarchy && 'oligarchy'
          }`}
        >
          {year()}
        </Flip>
      </div>
      <div className="map"></div>
    </div>
  );
};

export default GeoMap;
