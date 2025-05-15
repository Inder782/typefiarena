"use client";
import React, { useState, useEffect } from "react";
import { formatStopwatch } from "@/lib/utils";
/*
 at the moment static : need to make them dynmaic either from file or 
 from a backend.
 */

const sample_text = ["This is the text you need to type."];

const Page = () => {
  const [userInput, setUserInput] = useState("");
  const [isComplete, setIsComplete] = useState(false);
  const [accuracy, setAccuracy] = useState(100);
  const [startTime, setStartTime] = useState<number | null>(null);
  const [wpm, setWpm] = useState(0);
  const [elapsedTime, setElaspedTime] = useState(0);
  const [timerInterval, setTimerInterval] = useState<NodeJS.Timeout | null>(
    null
  );
  // Create array of characters
  const characters = [];
  for (let i = 0; i < sample_text[0].length; i++) {
    characters.push(sample_text[0][i]);
  }

  const handleKeyPress = (event: any) => {
    if (startTime == null && event.key.length == 1) {
      setStartTime(Date.now());
      start_timer();
    }

    // Handle normal character keys
    if (event.key.length === 1) {
      const newInput = userInput + event.key;
      setUserInput(newInput);
      calculatewpm(startTime);

      // Check if typing is complete ( no backspaces are allowed, user needs accuracy)
      if (newInput.length === sample_text[0].length) {
        setIsComplete(true);
        // stop timer logic here
        stop_timer();
      }
    }
  };
  const user_accuracy = (data: string) => {
    let correct_char = 0;
    if (data.length == 0) {
      setAccuracy(100);
      return;
    }
    for (let i = 0; i < data.length; i++) {
      if (sample_text[0][i] === data[i]) {
        correct_char += 1;
      }
    }

    let accuracy = Math.round((correct_char / data.length) * 100);
    setAccuracy(accuracy);
  };

  const calculatewpm = (time: number | null) => {
    if (time == null) return;
    const total_time = (Date.now() - time) / 60000;
    const wpm = Math.round(userInput.length / 5 / total_time);
    setWpm(wpm);
  };
  useEffect(() => {
    window.addEventListener("keydown", handleKeyPress);
    user_accuracy(userInput);
    return () => {
      window.removeEventListener("keydown", handleKeyPress);
    };
  }, [userInput]);

  const start_timer = () => {
    // It stores the interval , this checks if id is there then don't execute
    if (timerInterval) return;

    const interval = setInterval(() => {
      setElaspedTime((prev) => prev + 100);
    }, 100);
    setTimerInterval(interval);
  };
  const stop_timer = () => {
    // clear the interval and the timer stops
    if (timerInterval) {
      clearInterval(timerInterval);
      setTimerInterval(null);
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-[#03071E] via-[#370D94] to-[#4CC9F0] text-white p-6 relative overflow-hidden">
      <div className="w-full max-w-3xl backdrop-blur-md bg-black/30 rounded-xl border border-purple-500/20 shadow-xl p-8 mb-8">
        <div className="flex items-center justify-between mb-8">
          <h1 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-purple-500">
            TypeFiArena
          </h1>
          <div className="px-4 py-1 rounded-full bg-purple-500/20 text-purple-300 text-sm font-medium">
            Level 1
          </div>
        </div>

        <div className="mb-6">
          <div className="h-2 w-full bg-gray-800 rounded-full overflow-hidden">
            <div
              className="h-full bg-gradient-to-r from-cyan-400 to-purple-500 rounded-full transition-all duration-300"
              style={{
                width: `${(userInput.length / sample_text[0].length) * 100}%`,
              }}
            ></div>
          </div>
        </div>

        <div className="text-xl leading-relaxed  font-mono p-6 backdrop-blur-sm bg-black/20 rounded-lg border border-gray-700/50 mb-6">
          {characters.map((char, index) => (
            <span
              key={index}
              className={`transition-all duration-150 ${
                index < userInput.length
                  ? userInput[index] === char
                    ? "text-cyan-400"
                    : "text-red-400 bg-red-900/30"
                  : index === userInput.length
                  ? "border-b-2 border-purple-500 animate-pulse"
                  : "text-gray-500"
              }`}
            >
              {char}
            </span>
          ))}
        </div>

        {isComplete ? (
          <div className="text-center p-4 bg-gradient-to-r from-purple-500/20 to-cyan-500/20 rounded-lg border border-purple-500/30">
            <h2 className="text-2xl font-bold text-cyan-300 mb-2">
              Completed! 🎉
            </h2>
            <p className="text-gray-300">
              Speed: {wpm} WPM | Accuracy: {accuracy}
            </p>
            <button
              className="mt-4 px-6 py-2 bg-gradient-to-r from-purple-600 to-cyan-600 rounded-full hover:from-purple-500 hover:to-cyan-500 transition-all duration-300 font-medium"
              onClick={() => {
                setUserInput("");
                setIsComplete(false);
              }}
            >
              Try Again
            </button>
          </div>
        ) : (
          <p className="text-sm text-center text-gray-400">
            Press any key to start typing...
          </p>
        )}
      </div>

      <div className="flex gap-4 text-sm">
        <div className="px-4 py-2 bg-black/30 backdrop-blur-md rounded-lg border border-gray-700/50">
          <span className="text-gray-400">Accuracy:</span>{" "}
          <span className="text-cyan-400 font-medium">{accuracy}</span>
        </div>
        <div className="px-4 py-2 bg-black/30 backdrop-blur-md rounded-lg border border-gray-700/50">
          <span className="text-gray-400">WPM:</span>{" "}
          <span className="text-purple-400 font-medium">{wpm}</span>
        </div>
        <div className="px-4 py-2 bg-black/30 backdrop-blur-md rounded-lg border border-gray-700/50">
          <span className="text-gray-400">Time:</span>{" "}
          <span className="text-green-400 font-medium">
            {formatStopwatch(elapsedTime)}
          </span>
        </div>
      </div>
    </div>
  );
};

export default Page;
