import React from "react";
import { FaTrash } from "react-icons/fa"; // Import the trash can icon from React Icons

function RemoveEntryList({ entries, onRemoveEntry }) {
  return (
    <div className="remove-entry-list text-center">
      <h2 className="text-lg font-semibold mb-4">Entries</h2>
      <ul>
        {entries.map((entry, index) => (
          <li key={index} className="mb-2 pl-10 pr-10">
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                {entry.name}: ${entry.amount}
              </div>
              <button
                onClick={() => onRemoveEntry(index)}
                className="text-red-500 hover:text-red-700"
              >
                <FaTrash /> {/* Use the trash can icon */}
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default RemoveEntryList;
