import React from "react";
import Link from "next/link";

export default function ServicesPage() {
  const data = [
    {
      _id: 1,
      name: "Ariana Gomez",
      email: "ariana@example.com",
      role: "Restaurant",
      avatar: "https://i.pravatar.cc/150?img=1",
    },
    {
      _id: 2,
      name: "Liam Ahmed",
      email: "liam@example.com",
      role: "Charity",
      avatar: "https://i.pravatar.cc/150?img=2",
    },
    {
      _id: 3,
      name: "Noor Hasan",
      email: "noor@example.com",
      role: "Admin",
      avatar: "https://i.pravatar.cc/150?img=3",
    },
    {
      _id: 4,
      name: "Zara Rahman",
      email: "zara@example.com",
      role: "User",
      avatar: "https://i.pravatar.cc/150?img=4",
    },
    {
      _id: 5,
      name: "David Lee",
      email: "david@example.com",
      role: "Restaurant",
      avatar: "https://i.pravatar.cc/150?img=5",
    },
  ];

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">Services</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {data.map((d) => (
          <Link key={d._id} href={`/services/${d._id}`}>
            <div className="card border p-4 rounded shadow hover:shadow-lg transition-all cursor-pointer">
              <img
                src={d.avatar}
                alt={d.name}
                className="w-16 h-16 rounded-full mb-2"
              />
              <h1 className="text-lg font-semibold">{d.name}</h1>
              <p className="text-sm text-gray-600">{d.email}</p>
              <span className="text-xs text-white bg-blue-500 px-2 py-1 rounded-full">
                {d.role}
              </span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
