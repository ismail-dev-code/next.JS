import React from "react";

export default function ServicesPageDetails({ params }) {
  const id = params.id;

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

  const singleData = data.find((d) => d._id === Number(id));

  if (!singleData) {
    return <h2 className="text-red-500 p-4">User not found</h2>;
  }

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">Service Details</h2>
      <div className="border rounded-lg p-4 shadow max-w-md">
        <img
          src={singleData.avatar}
          alt={singleData.name}
          className="w-24 h-24 rounded-full mb-4"
        />
        <h1 className="text-lg font-semibold">{singleData.name}</h1>
        <p>{singleData.email}</p>
        <p className="text-sm text-gray-600">{singleData.role}</p>
      </div>
    </div>
  );
}
