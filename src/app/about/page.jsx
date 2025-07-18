"use client"
import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";

export default function AboutPage() {
  const router = useRouter();
  const isLoggedIn = false;
  const handleNavigation = () => {
    if (isLoggedIn) {
      router.push("/about/address");
    } else {
      router.push("/");
    }
  };
  return (
    <div className="text-center">
      <p>about</p>
      <p><Link href={"/about/address"}>
        <li className="cursor-pointer">Address</li>
      </Link></p>
      <button type="button" onClick={handleNavigation}>
        Address page
      </button>
    </div>
  );
}
