'use client'
import React, { useState } from "react";

function EntryForm({ onAddEntry }) {
  const [entryType, setEntryType] = useState("income");
  const [entryName, setEntryName] = useState("");
  const [entryAmount, setEntryAmount] = useState("");
  const [entryDate, setEntryDate] = useState("");
  const [paymentType, setPaymentType] = useState("single-time");

  const handleAddEntry = () => {
    if (entryName && entryAmount) {
      const newEntry = {
        type: entryType,
        paymentType,
        name: entryName,
        amount: parseFloat(entryAmount),
        date: entryDate,
      };
      onAddEntry(newEntry);
      setEntryType("income");
      setEntryName("");
      setEntryAmount("");
      setEntryDate("");
      setPaymentType("single-time");
    }
  };

  return (
    <div className="entry-form p-4 bg-gray-100 rounded-lg">
      <h2 className="text-lg font-semibold mb-4 text-center">Add New Transaction</h2>
      <div className="mb-4">
        <label className="font-semibold">Type:</label>
        <select
          value={entryType}
          onChange={(e) => setEntryType(e.target.value)}
          className="ml-2 p-2 border rounded-md"
        >
          <option value="income">Income</option>
          <option value="expenses">Expenses</option>
          <option value="investments">Investments</option>
        </select>
      </div>
      <div className="mb-4">
        <label className="font-semibold">Name:</label>
        <input
          type="text"
          value={entryName}
          onChange={(e) => setEntryName(e.target.value)}
          className="ml-2 p-2 border rounded-md w-full"
        />
      </div>
      <div className="mb-4">
        <label className="font-semibold">Amount:</label>
        <input
          type="number"
          value={entryAmount}
          onChange={(e) => setEntryAmount(e.target.value)}
          className="ml-2 p-2 border rounded-md w-full"
        />
      </div>
      <div className="mb-4">
        <label className="font-semibold">Payment Type:</label>
        <select
          value={paymentType}
          onChange={(e) => setPaymentType(e.target.value)}
          className="ml-2 p-2 border rounded-md"
        >
          <option value="single-time">Single Time</option>
          <option value="recurring">Recurring</option>
        </select>
      </div>
      {paymentType === "single-time" ? (
        <div className="mb-4">
          <label className="font-semibold">Date:</label>
          <input
            type="date"
            value={entryDate}
            onChange={(e) => setEntryDate(e.target.value)}
            className="ml-2 p-2 border rounded-md w-full"
          />
        </div>
      ) : paymentType === "recurring" ? (
        <div className="mb-4">
          <label className="font-semibold">Day:</label>
          <select
            value={entryDate}
            onChange={(e) => setEntryDate(e.target.value)}
            className="ml-2 p-2 border rounded-md"
          >
            <option value="monday">Monday</option>
            <option value="tuesday">Tuesday</option>
            <option value="wednesday">Wednesday</option>
            <option value="thursday">Thursday</option>
            <option value="friday">Friday</option>
            <option value="saturday">Saturday</option>
            <option value="sunday">Sunday</option>
          </select>
        </div>
      ) : null}

      <button
        className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
        onClick={handleAddEntry}
      >
        Add Entry
      </button>
    </div>
  );
}

export default EntryForm;
