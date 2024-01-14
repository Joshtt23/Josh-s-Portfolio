"use client";
import { NextSeo } from "next-seo"; // For SEO optimization
import { useEffect, useState } from "react";
import { Doughnut } from "react-chartjs-2";

function FinanceTracker() {
  const [isClient, setIsClient] = useState(false);
  const [income, setIncome] = useState([]);
  const [expenses, setExpenses] = useState([]);
  const [investments, setInvestments] = useState([]);
  const [entryType, setEntryType] = useState("income");
  const [entryName, setEntryName] = useState("");
  const [entryAmount, setEntryAmount] = useState("");
  const [goals, setGoals] = useState([]);
  const [goalName, setGoalName] = useState("");
  const [goalAmount, setGoalAmount] = useState("");

  // Set isClient to true on the client side
  useEffect(() => {
    setIsClient(true);

    // Load data from localStorage on page load
    const storedIncome = localStorage.getItem("income");
    const storedExpenses = localStorage.getItem("expenses");
    const storedInvestments = localStorage.getItem("investments");
    const storedGoals = localStorage.getItem("goals");

    if (storedIncome) {
      setIncome(JSON.parse(storedIncome));
    }
    if (storedExpenses) {
      setExpenses(JSON.parse(storedExpenses));
    }
    if (storedInvestments) {
      setInvestments(JSON.parse(storedInvestments));
    }
    if (storedGoals) {
      setGoals(JSON.parse(storedGoals));
    }
  }, []);

  // Function to add a new entry
  const addEntry = () => {
    if (entryName && entryAmount) {
      const newEntry = {
        name: entryName,
        amount: parseFloat(entryAmount),
      };
      if (entryType === "income") {
        setIncome([...income, newEntry]);
        // Store updated income data in localStorage
        localStorage.setItem("income", JSON.stringify([...income, newEntry]));
      } else if (entryType === "expenses") {
        setExpenses([...expenses, newEntry]);
        // Store updated expenses data in localStorage
        localStorage.setItem(
          "expenses",
          JSON.stringify([...expenses, newEntry])
        );
      } else if (entryType === "investments") {
        setInvestments([...investments, newEntry]);
        // Store updated investments data in localStorage
        localStorage.setItem(
          "investments",
          JSON.stringify([...investments, newEntry])
        );
      } else if (entryType === "goals") {
        setGoals([...goals, newEntry]);
        // Store updated goals data in localStorage
        localStorage.setItem("goals", JSON.stringify([...goals, newEntry]));
      }
      // Clear input fields
      setEntryName("");
      setEntryAmount("");
    }
  };

  // Function to delete an entry
  const deleteEntry = (type, index) => {
    if (type === "income") {
      const updatedIncome = [...income];
      updatedIncome.splice(index, 1);
      setIncome(updatedIncome);
      // Update income data in localStorage
      localStorage.setItem("income", JSON.stringify(updatedIncome));
    } else if (type === "expenses") {
      const updatedExpenses = [...expenses];
      updatedExpenses.splice(index, 1);
      setExpenses(updatedExpenses);
      // Update expenses data in localStorage
      localStorage.setItem("expenses", JSON.stringify(updatedExpenses));
    } else if (type === "investments") {
      const updatedInvestments = [...investments];
      updatedInvestments.splice(index, 1);
      setInvestments(updatedInvestments);
      // Update investments data in localStorage
      localStorage.setItem("investments", JSON.stringify(updatedInvestments));
    } else if (type === "goals") {
      const updatedGoals = [...goals];
      updatedGoals.splice(index, 1);
      setGoals(updatedGoals);
      // Update goals data in localStorage
      localStorage.setItem("goals", JSON.stringify(updatedGoals));
    }
  };

  // Calculate totals
  const calculateTotal = (entries) => {
    return entries.reduce((total, entry) => total + entry.amount, 0);
  };

  const totalIncome = calculateTotal(income);
  const totalExpenses = calculateTotal(expenses);
  const totalInvestments = calculateTotal(investments);
  const takeHome = totalIncome - totalExpenses;
  const netWorth = takeHome + totalInvestments;

  // Calculate total goals
  const totalGoals = calculateTotal(goals);

  // Chart data for expense categorization
  const expenseCategories = expenses.reduce((categories, entry) => {
    const category = entry.category || "Uncategorized";
    if (!categories[category]) {
      categories[category] = 0;
    }
    categories[category] += entry.amount;
    return categories;
  }, {});

  const expenseChartData = {
    labels: Object.keys(expenseCategories),
    datasets: [
      {
        data: Object.values(expenseCategories),
        backgroundColor: [
          "#FF5733",
          "#FFBD33",
          "#33FF57",
          "#3363FF",
          "#C133FF",
        ],
      },
    ],
  };

  return (
    <>
      <NextSeo
        title="Finance Tracker - Joshua Traver"
        description="Track your income, expenses, and investments with Finance Tracker."
        // ... other SEO configurations
      />

      <div className="flex flex-col items-center justify-center">
        {/* SPA Content */}
        {isClient && (
          <div className="mt-10 w-5/6">
            <h2 className="text-2xl font-bold mb-4 text-center">FinanTrack</h2>
            <div className="bg-white p-4 rounded-lg shadow-lg w-10/12 mx-auto text-center my-auto">
              {/* Add Entry Form */}
              <div className="mb-4 mx-auto text-center">
                <div className="flex flex-col lg:flex-row items-center mx-auto">
                  <h3 className="text-lg font-semibold mb-2 lg:mb-0 lg:mr-2">
                    Add New Entry
                  </h3>
                  <div className="mr-2">
                    <select
                      className="p-1 border border-gray-300 rounded-md"
                      onChange={(e) => setEntryType(e.target.value)}
                      value={entryType}
                    >
                      <option value="income">Income</option>
                      <option value="expenses">Expenses</option>
                      <option value="investments">Investments</option>
                      <option value="goals">Goals</option>
                    </select>
                  </div>
                  <div className="mr-2">
                    <input
                      type="text"
                      placeholder="Name"
                      className="p-1 border border-gray-300 rounded-md"
                      value={entryName}
                      onChange={(e) => setEntryName(e.target.value)}
                    />
                  </div>
                  <div className="mr-2">
                    <input
                      type="number"
                      placeholder="Amount"
                      className="p-1 border border-gray-300 rounded-md"
                      value={entryAmount}
                      onChange={(e) => setEntryAmount(e.target.value)}
                    />
                  </div>
                  <button
                    className="px-3 py-1 bg-blue-500 text-white rounded-md xl:mr-auto lg:mx-auto"
                    onClick={addEntry}
                  >
                    Add
                  </button>
                </div>
              </div>

              {/* Income */}
              <div className="mb-4">
                <h3 className="text-lg font-semibold mb-2">Income</h3>
                <ul className="pl-10">
                  {/* Display income entries and add delete option */}
                  {income.map((entry, index) => (
                    <li key={index}>
                      {entry.name}: ${entry.amount}{" "}
                      <button
                        onClick={() => deleteEntry("income", index)}
                        className="text-red-500 ml-2"
                      >
                        Delete
                      </button>
                    </li>
                  ))}
                </ul>
                <div className="text-green-500 font-semibold">
                  Total Income: ${totalIncome}
                </div>
              </div>
              {/* Expenses */}
              <div className="mb-4">
                <h3 className="text-lg font-semibold mb-2">Expenses</h3>
                <ul className="pl-10">
                  {expenses.map((entry, index) => (
                    <li key={index}>
                      {entry.name}: ${entry.amount}{" "}
                      <button
                        onClick={() => deleteEntry("expenses", index)}
                        className="text-red-500 ml-2"
                      >
                        Delete
                      </button>
                    </li>
                  ))}
                </ul>
                <div className="text-red-500 font-semibold">
                  Total Expenses: ${totalExpenses}
                </div>
              </div>
              {/* Investments */}
              <div className="mb-4">
                <h3 className="text-lg font-semibold mb-2">Investments</h3>
                <ul className="pl-10">
                  {investments.map((entry, index) => (
                    <li key={index}>
                      {entry.name}: ${entry.amount}{" "}
                      <button
                        onClick={() => deleteEntry("investments", index)}
                        className="text-red-500 ml-2"
                      >
                        Delete
                      </button>
                    </li>
                  ))}
                </ul>
                <div className="text-blue-500 font-semibold">
                  Total Investments: ${totalInvestments}
                </div>
              </div>

              {/* Goals */}
              <div className="mb-4">
                <h3 className="text-lg font-semibold mb-2">Financial Goals</h3>
                <ul className="pl-10">
                  {goals.map((goal, index) => (
                    <li key={index}>
                      {goal.name}: ${goal.amount}{" "}
                      <button
                        onClick={() => deleteEntry("goals", index)}
                        className="text-red-500 ml-2"
                      >
                        Delete
                      </button>
                    </li>
                  ))}
                </ul>
                <div className="text-blue-500 font-semibold">
                  Total Goals: ${totalGoals}
                </div>
              </div>

              {/* Take Home */}
              <div className="text-green-500 font-semibold">
                Take Home (Income - Expenses): ${takeHome}
              </div>
              {/* Net Worth */}
              <div className="text-blue-500 font-semibold">
                Net Worth (Take Home + Investments): ${netWorth}
              </div>
              {/* Goal Progress */}
              <div className="text-blue-500 font-semibold">
                Time Till Goal (Take Home per x till goal):{" "}
                {(totalGoals / takeHome).toFixed(1)} months
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
}

export default FinanceTracker;
