"use client";
import React, { useEffect, useState } from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";

function Calendar({ financeData }) {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    //for each entry populate the calendar
    if (financeData.length >= 0) {
      const newEvents = financeData.map((entry) => {
        if (entry.paymentType === "single-time") {
          return {
            title: `${entry.name}: $${entry.amount}`,
            start: entry.date,
            color:
              entry.type === "income"
                ? "green"
                : entry.type === "expenses"
                ? "red"
                : "blue",
          };
        } else if (entry.paymentType === "recurring") {
          const newEvents = [];
          const date = new Date(entry.date);
          const endDate = new Date(entry.endDate);
          while (date <= endDate) {
            newEvents.push({
              title: `${entry.name}: $${entry.amount}`,
              start: date,
              color:
                entry.type === "income"
                  ? "green"
                  : entry.type === "expenses"
                  ? "red"
                  : "blue",
            });
            date.setDate(date.getDate() + 1);
          }
          return newEvents;
        }
      });
      setEvents(newEvents.flat());
    }
  }, [financeData]);

  return (
    <div className="calendar text-center mx-auto w-100">
      <div className="flex items-center justify-between mb-4 mx-auto w-5/6">
        <div className="w-11/12 mx-auto ">
          <FullCalendar
            plugins={[dayGridPlugin]}
            initialView="dayGridMonth"
            events={events}
            // eventContent={(arg) => {
            //   const backgroundColor = eventBackgroundColor(
            //     arg.event.extendedProps.type
            //   );
            //   return {
            //     backgroundColor: backgroundColor,
            //     textColor: "white", // Text color
            //   };
            // }}
          />
        </div>
      </div>
    </div>
  );
}

export default Calendar;
