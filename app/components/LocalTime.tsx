"use client";
import React, { useEffect, useState } from "react";
import { format } from "date-fns";
import { toZonedTime } from "date-fns-tz";

const LocalTime = () => {
  const [time, setTime] = useState("");

  useEffect(() => {
    const timeZone = "Asia/Kolkata"; // IST (change if needed)

    const updateTime = () => {
      const now = new Date();
      const zonedDate = toZonedTime(now, timeZone);
      const formatted = format(zonedDate, "hh:mm aaaa");
      setTime(formatted);
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);

    return () => clearInterval(interval);
  }, []);

  return <span className="text-[#FAFAFA]">{time} IST</span>;
};

export default LocalTime;
