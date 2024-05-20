"use client";
import React from "react";
import Timer from "./timer";
const { useEffect, useState } = React;

export default function PlayButton() {
  const [audio, setAudio] = useState<HTMLAudioElement | null>(null);
  const [isRunning, setIsRunning] = useState(false);
  useEffect(() => {
    return setAudio(new Audio("/sound/ドラ.mp3"));
  }, []);

  const playSound = () => {
    setIsRunning(!isRunning);
    audio && audio.play();
  };

  return (
    <div className="w-full flex-col mt-8">
      <div className="w-full flex justify-center mt-4">
        <Timer isRunning={isRunning} playSound={playSound} />
      </div>
      <div className="w-full flex justify-center mt-4">
        <button
          onClick={playSound}
          className="w-64 h-14 p-2 bg-blue-500 text-white rounded-2xl hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-opacity-50 transition-colors duration-300 ease-in-out cursor-pointer shadow-md"
        >
          Play Sound
        </button>
      </div>
    </div>
  );
}
