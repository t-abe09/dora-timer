"use client";

import { useEffect, useState } from "react";

const TIMEUP = 300;

const Timer = ({
  isRunning,
  playSound,
}: {
  isRunning: boolean;
  playSound: () => void;
}) => {
  const [seconds, setSeconds] = useState(TIMEUP); // 300秒（5分）から開始

  useEffect(() => {
    if (isRunning && seconds > 0) {
      const timerId = setTimeout(() => {
        setSeconds(seconds - 1);
      }, 1000);
      return () => clearTimeout(timerId); // コンポーネントのアンマウント時にタイマーをクリア
    } else if (isRunning && seconds === 0) {
      playSound();
      setSeconds(TIMEUP);
    }
  }, [seconds, playSound, isRunning]);

  const minutes = Math.floor(seconds / 60);
  const remainingSeconds = seconds % 60;

  return (
    <div
      style={{ fontSize: "5em", fontFamily: "monospace", textAlign: "center" }}
    >
      {minutes}:
      {remainingSeconds < 10 ? `0${remainingSeconds}` : remainingSeconds}
    </div>
  );
};

export default Timer;
