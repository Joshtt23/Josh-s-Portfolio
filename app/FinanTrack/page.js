"use client";
import React, { useState } from "react";
import Calendar from "@/components/Calander";
import EntryForm from "@/components/FinanceEntry";
import RemoveEntryList from "@/components/RemoveEntry";
import FinancialDetails from "@/components/FinancialDet";

function FinanceTrackerLayout() {
  // Define state to manage the finance data
  const [financeData, setFinanceData] = useState([]);

  const addEntry = (newEntry) => {
    setFinanceData((prevFinanceData) => [...prevFinanceData, newEntry]);
  };

  const removeEntry = (index) => {
    if (financeData.length === 1) {
      setFinanceData([]);
      return;
    } else {
      setFinanceData((prevFinanceData) =>
        prevFinanceData.filter((entry, i) => i !== index)
      );
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <header className="p-4 text-black">
        <h1 className="text-2xl font-semibold">FinanTrack</h1>
      </header>
      <main className="w-11/12 max-w-4xl mt-6 p-4 bg-white rounded-lg shadow-lg">
        <div className="flex flex-wrap mx-auto">
          {/* Remove Entry Section */}
          <section className="mb-8 flex-grow-1 mx-auto w-1/2">
            <RemoveEntryList
              entries={financeData}
              onRemoveEntry={removeEntry}
            />
          </section>
          {/* Add Entry Section */}
          <section className="mb-8 flex-grow-1 mx-auto w-1/2">
            <div className="entry-box p-4 rounded-lg border bg-gray-50">
              <EntryForm onAddEntry={addEntry} />
            </div>
          </section>
        </div>
        {/* Calendar Section */}
        <section className="mb-8">
          <Calendar financeData={financeData} />
        </section>

        <section className="mb-8">
          <FinancialDetails financeData={financeData} />
        </section>
      </main>
    </div>
  );
}

export default FinanceTrackerLayout;
