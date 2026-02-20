import { useState, useEffect } from "react";

const TARGET = new Date("2026-03-26T09:00:00+05:00").getTime();

const CountdownTimer = () => {
  const [timeLeft, setTimeLeft] = useState(getTimeLeft());

  function getTimeLeft() {
    const diff = Math.max(0, TARGET - Date.now());
    return {
      days: Math.floor(diff / 86400000),
      hours: Math.floor((diff % 86400000) / 3600000),
      minutes: Math.floor((diff % 3600000) / 60000),
      seconds: Math.floor((diff % 60000) / 1000),
    };
  }

  useEffect(() => {
    const id = setInterval(() => setTimeLeft(getTimeLeft()), 1000);
    return () => clearInterval(id);
  }, []);

  const units = [
    { label: "Days", value: timeLeft.days },
    { label: "Hours", value: timeLeft.hours },
    { label: "Minutes", value: timeLeft.minutes },
    { label: "Seconds", value: timeLeft.seconds },
  ];

  return (
    <div className="flex justify-center gap-4 sm:gap-6">
      {units.map((u) => (
        <div key={u.label} className="flex flex-col items-center">
          <span className="font-display text-3xl sm:text-5xl font-black text-primary tabular-nums">
            {String(u.value).padStart(2, "0")}
          </span>
          <span className="text-xs sm:text-sm text-muted-foreground mt-1">{u.label}</span>
        </div>
      ))}
    </div>
  );
};

export default CountdownTimer;
