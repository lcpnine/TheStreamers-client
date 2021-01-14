import { useState, useEffect, ReactElement } from 'react';

const secToMin = (sec: number) => {
  const min = Math.floor(sec / 60);
  const restSec = (sec % 60).toString();
  return `${min}: ${restSec.length < 2 ? '0' + restSec : restSec}`;
};

interface Props {
  maxSec: number;
}

const Timer = ({ maxSec }: Props): ReactElement => {
  const [seconds, setSeconds] = useState(maxSec);
  useEffect(() => {
    if (seconds === 0) return;
    const interval = setInterval(() => {
      setSeconds(seconds - 1);
      console.log(seconds);
    }, 1000);
    return () => clearInterval(interval);
  });
  return <p>{secToMin(seconds)}</p>;
};

export default Timer;
