import { useState, useEffect } from "react";

type CounterStatus = "paused" | "playing";

interface CounterSettings {
  initialValue: number;
  autoPlay?: boolean;
}

export const useCounter = ({
  initialValue,
  autoPlay = true,
}: CounterSettings): [
  number,
  () => void,
  () => void,
  () => void,
  CounterStatus
] => {
  const [count, setCount] = useState<number>(initialValue);
  const [intervalId, setIntervalId] = useState<NodeJS.Timeout | null>(null);
  const [status, setStatus] = useState<CounterStatus>("playing");

  useEffect(() => {
    if (autoPlay) {
      play();
    }

    return () => clearInterval(intervalId!);
  }, []);

  const pause = () => {
    if (intervalId) {
      clearInterval(intervalId);
      setIntervalId(null);
      setStatus("paused");
    }
  };

  const reset = () => {
    pause();
    setCount(initialValue);
  };

  const play = () => {
    if (!intervalId) {
      const id = setInterval(() => {
        setCount((count) => count + 1);
      }, 1000);
      setIntervalId(id);
      setStatus("playing");
    }
  };

  return [count, pause, reset, play, status];
};
