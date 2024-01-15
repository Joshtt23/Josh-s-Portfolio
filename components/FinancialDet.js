'use client'
import React, { useEffect, useState } from "react";
import { FaSpinner } from "react-icons/fa";

function FinancialDetails({ financeData }) {
  const [isLoading, setIsLoading] = useState(true);
  const [weekDetails, setWeekDetails] = useState({});
  const [monthDetails, setMonthDetails] = useState({});
  const [yearDetails, setYearDetails] = useState({});

  // Helper function to calculate random investment returns
  const calculateRandomReturns = (investmentAmount) => {
    const randomPercent = Math.random() * 20; // Random percent between 0 and 20
    return (investmentAmount * randomPercent) / 100;
  };

  // Helper function to calculate totals for a specific time period
  const calculateTotals = (startDate, endDate) => {
    const filteredData = financeData.filter((entry) => {
      const entryDate = new Date(entry.date);
      return entryDate >= startDate && entryDate <= endDate;
    });

    const totalIncome = filteredData
      .filter((entry) => entry.type === "income")
      .reduce((sum, entry) => sum + entry.amount, 0);

    const totalExpenses = filteredData
      .filter((entry) => entry.type === "expenses")
      .reduce((sum, entry) => sum + entry.amount, 0);

    const totalInvestments = filteredData
      .filter((entry) => entry.type === "investment")
      .reduce((sum, entry) => sum + entry.amount, 0);

    const investmentReturns = calculateRandomReturns(totalInvestments);

    const savingsOrLoss = totalIncome - totalExpenses;

    return {
      totalIncome,
      totalExpenses,
      savingsOrLoss,
      totalInvestments,
      investmentReturns,
    };
  };

  useEffect(() => {
    setIsLoading(true);
    // Calculate financial details for the current week, month, and year
    const currentDate = new Date();
    const currentYear = currentDate.getFullYear();
    const currentMonth = currentDate.getMonth();
    const currentDay = currentDate.getDate();

    const currentWeekStart = new Date(
      currentYear,
      currentMonth,
      currentDay - currentDate.getDay()
    );
    const currentMonthStart = new Date(currentYear, currentMonth, 1);
    const currentYearStart = new Date(currentYear, 0, 1);

    const currentWeekEnd = new Date(
      currentYear,
      currentMonth,
      currentDay + (6 - currentDate.getDay())
    );
    const currentMonthEnd = new Date(currentYear, currentMonth + 1, 0);
    const currentYearEnd = new Date(currentYear, 11, 31);

    const weekDetails = calculateTotals(currentWeekStart, currentWeekEnd);
    const monthDetails = calculateTotals(currentMonthStart, currentMonthEnd);
    const yearDetails = calculateTotals(currentYearStart, currentYearEnd);

    setWeekDetails(weekDetails);
    setMonthDetails(monthDetails);
    setYearDetails(yearDetails);

    setIsLoading(false);
  }, [financeData]);

  return (
    <>
      {isLoading ? (
        <div className="text-center">
          <FaSpinner className="animate-spin text-4xl mt-4" />
          <p>Loading...</p>
        </div>
      ) : (
        <div className="financial-details text-center">
          <h2 className="text-2xl font-semibold mb-4">Financial Breakdown</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-lg font-semibold mb-2">Current Week</h3>
              <p>Total Income: ${weekDetails.totalIncome}</p>
              <p>Total Expenses: ${weekDetails.totalExpenses}</p>
              <p>
                {weekDetails.savingsOrLoss > 0 ? (
                  <span className="text-green-700">
                    Savings: ${weekDetails.savingsOrLoss}
                  </span>
                ) : (
                  <span className="text-red-700">
                    Loss: ${weekDetails.savingsOrLoss}
                  </span>
                )}
              </p>
              <p>Total Investments: ${weekDetails.totalInvestments}</p>
              <p>
                Investment Returns: $
                {weekDetails.investmentReturns.toFixed(2)}
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-lg font-semibold mb-2">Current Month</h3>
              <p>Total Income: ${monthDetails.totalIncome}</p>
              <p>Total Expenses: ${monthDetails.totalExpenses}</p>
              <p>
                {monthDetails.savingsOrLoss > 0 ? (
                  <span className="text-green-700">
                    Savings: ${monthDetails.savingsOrLoss}
                  </span>
                ) : (
                  <span className="text-red-700">
                    Loss: ${monthDetails.savingsOrLoss}
                  </span>
                )}
              </p>
              <p>Total Investments: ${monthDetails.totalInvestments}</p>
              <p>
                Investment Returns: $
                {monthDetails.investmentReturns.toFixed(2)}
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-lg font-semibold mb-2">Current Year</h3>
              <p>Total Income: ${yearDetails.totalIncome}</p>
              <p>Total Expenses: ${yearDetails.totalExpenses}</p>
              <p>
                {yearDetails.savingsOrLoss > 0 ? (
                  <span className="text-green-700">
                    Savings: ${yearDetails.savingsOrLoss}
                  </span>
                ) : (
                  <span className="text-red-700">
                    Loss: ${yearDetails.savingsOrLoss}
                  </span>
                )}
              </p>
              <p>Total Investments: ${yearDetails.totalInvestments}</p>
              <p>
                Investment Returns: ${yearDetails.investmentReturns.toFixed(2)}
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default FinancialDetails;
