"use client";

import { useState, useEffect } from "react";

export default function Calendar() {
  const [currentDate, setCurrentDate] = useState(null);
  const [today, setToday] = useState(null);
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);

  useEffect(() => {
    const now = new Date();
    setCurrentDate(now);
    setToday(now);
  }, []);

  if (!currentDate || !today) return null;

  const year = currentDate.getFullYear();
  const month = currentDate.getMonth();

  const daysInMonth = new Date(year, month + 1, 0).getDate();

  let firstDay = new Date(year, month, 1).getDay();
  firstDay = firstDay === 0 ? 6 : firstDay - 1;

  const days = [];

  for (let i = 0; i < firstDay; i++) {
    days.push(null);
  }

  for (let i = 1; i <= daysInMonth; i++) {
    days.push(i);
  }

  const handleClick = (day) => {
    if (!day) return;

    if (!startDate || (startDate && endDate)) {
      setStartDate(day);
      setEndDate(null);
    } else {
      if (day < startDate) {
        setEndDate(startDate);
        setStartDate(day);
      } else {
        setEndDate(day);
      }
    }
  };

  const isInRange = (day) => {
    if (!startDate || !endDate) return false;
    return day >= startDate && day <= endDate;
  };

  const changeMonth = (direction) => {
    const newDate = new Date(currentDate);
    newDate.setMonth(currentDate.getMonth() + direction);
    setCurrentDate(newDate);

    setStartDate(null);
    setEndDate(null);
  };

  const isToday = (day) => {
    if (!day) return false;

    return (
      day === today.getDate() &&
      month === today.getMonth() &&
      year === today.getFullYear()
    );
  };

  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <button
          onClick={() => changeMonth(-1)}
          className="text-gray-500 hover:text-black"
        >
          ◀
        </button>

        <h2 className="text-xl font-semibold tracking-wide">
          {currentDate
            .toLocaleString("default", { month: "long" })
            .toUpperCase()}{" "}
          {year}
        </h2>

        <button
          onClick={() => changeMonth(1)}
          className="text-gray-500 hover:text-black"
        >
          ▶
        </button>
      </div>

      <div className="grid grid-cols-7 text-center font-semibold mb-2 text-gray-600">
        <div>Mon</div>
        <div>Tue</div>
        <div>Wed</div>
        <div>Thu</div>
        <div>Fri</div>
        <div>Sat</div>
        <div>Sun</div>
      </div>

      <div className="grid grid-cols-7 gap-2">
        {days.map((day, index) => (
          <div
            key={index}
            onClick={() => handleClick(day)}
            className={`h-12 flex items-center justify-center rounded-lg text-sm transition-all
              ${day ? "cursor-pointer" : ""}
              ${isToday(day) ? "border border-black font-bold" : ""}
              ${
                day === startDate || day === endDate
                  ? "bg-black text-white"
                  : ""
              }
              ${isInRange(day) ? "bg-gray-300" : ""}
              ${
                day &&
                !isInRange(day) &&
                day !== startDate &&
                day !== endDate
                  ? "hover:bg-gray-200"
                  : ""
              }`}
          >
            {day}
          </div>
        ))}
      </div>
    </div>
  );
}