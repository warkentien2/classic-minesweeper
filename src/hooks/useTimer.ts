import { useCallback, useState, useEffect } from "react";

type CounterStatus = "paused" | "playing";

interface CounterSettings {
  initialValue: number;
  autoPlay?: boolean;
}

export const useTimer = ({
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
  }, [autoPlay, intervalId]);

  const pause = useCallback(() => {
    if (intervalId) {
      clearInterval(intervalId);
      setIntervalId(null);
      setStatus("paused");
    }
  }, [intervalId]);

  const reset = useCallback(() => {
    pause();
    setCount(initialValue);
  }, [initialValue, pause]);

  const play = useCallback(() => {
    if (!intervalId) {
      const id = setInterval(() => {
        setCount((count) => count + 1);
      }, 1000);
      setIntervalId(id);
      setStatus("playing");
    }
  }, [intervalId]);

  return [count, pause, reset, play, status];
};
