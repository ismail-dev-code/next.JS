import React from "react";

export default function DashboardLayout({ children }) {
  return (
    <div className="grid grid-cols-12 min-h-screen">
      <div className="col-span-3 bg-gray-100 p-4">
        <ul>
          <li>User List</li>
        </ul>
      </div>
      <div className="col-span-9 p-4">
        {children}
      </div>
    </div>
  );
}
