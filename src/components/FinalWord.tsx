import { useI18n } from '@solid-primitives/i18n';
import { batch, createSignal, onCleanup, onMount } from 'solid-js';
import Flip from './Flip';
import {
  differenceInDays,
  differenceInHours,
  differenceInMinutes,
  differenceInSeconds,
} from 'date-fns';

const FinalWord = () => {
  const [t] = useI18n();
  const endTime = new Date('2022-12-23T20:00:00.000Z');
  const [secondsLeft, setSecondsLeft] = createSignal();
  const [minutesLeft, setMinutesLeft] = createSignal();
  const [hoursLeft, setHoursLeft] = createSignal();
  const [daysLeft, setDaysLeft] = createSignal();
  let countdown;

  onMount(() => {
    countdown = setInterval(() => {
      update();
    }, 1000);
  });

  onCleanup(() => {
    clearInterval(countdown);
  });

  const update = () => {
    batch(() => {
      const now = new Date();
      setSecondsLeft(differenceInSeconds(endTime, now) % 60);
      setMinutesLeft(differenceInMinutes(endTime, now) % 60);
      setHoursLeft(differenceInHours(endTime, now) % 24);
      setDaysLeft(differenceInDays(endTime, now));
    });
  };
  update();

  return (
    <div className="w-full h-full flex flex-col justify-center items-center text-sanet bg-black text-white text-xl sm:text-3xl md:text-4xl finished">
      <div className="h-2/3 w-full tbilisi bg-contain rotate-180 scale-110"></div>
      <span className="text-center px-14 sm:px-16 lg:px-20">
        {t('finalWord')}
      </span>
      <div className="absolute bottom-1/4 flex items-center mt-32 mix-blend-luminosity">
        {t('d')}&nbsp;
        <Flip>{daysLeft()}</Flip>
        &nbsp;{t('h')}&nbsp;
        <Flip>{hoursLeft()}</Flip>
        &nbsp;{t('m')}&nbsp;
        <Flip>{minutesLeft()}</Flip>
        &nbsp;{t('s')}&nbsp;
        <Flip>{secondsLeft()}</Flip>
      </div>
      <div className="h-2/3 w-full war bg-contain lg:bg-cover"></div>
    </div>
  );
};

export default FinalWord;
