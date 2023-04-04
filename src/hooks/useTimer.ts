import { useState, useRef } from "react";

type TimerState = "running" | "paused";

interface Timer {
  value: number;
  state: TimerState;
  play: () => void;
  pause: () => void;
  reset: () => void;
}

export const useTimer = (initialValue: number): Timer => {
  const [startTime, setStartTime] = useState<number>(Date.now());
  const [elapsedTime, setElapsedTime] = useState<number>(initialValue);
  const [state, setState] = useState<TimerState>("paused");
  const requestRef = useRef<number>();

  const updateTimer = () => {
    const now = Date.now();
    setElapsedTime(now - startTime + initialValue);
    requestRef.current = requestAnimationFrame(updateTimer);
  };

  const startTimer = () => {
    setState("running");
    setStartTime(Date.now());
    requestRef.current = requestAnimationFrame(updateTimer);
  };

  const pauseTimer = () => {
    setState("paused");
    cancelAnimationFrame(requestRef.current!);
  };

  const resetTimer = () => {
    setElapsedTime(initialValue);
    setStartTime(Date.now());
    cancelAnimationFrame(requestRef.current!);
    setState("paused");
  };

  const play = () => {
    if (state === "paused") {
      startTimer();
    }
  };

  const pause = () => {
    if (state === "running") {
      pauseTimer();
    }
  };

  const reset = () => {
    resetTimer();
  };

  return {
    value: Math.floor(elapsedTime / 1000),
    state,
    play,
    pause,
    reset,
  };
};
