"use client";

import { useRouter } from "next/navigation";
export default function Home() {
  const router = useRouter();
  const handleClick = () => {
    router.push("/home");
  };

  return (
    <div className="flex justify-center ">
      <div className="w-1/2 text-center mt-20 ">
        <h2 className="text-4xl font-bold mb-4">
          Indulge in unlimited reading like how milllions already have
        </h2>
        <ul className="font-bold">
          <li>➔ Read 800+ magazines and books</li>
          <li>➔ Access to curated premium stuff</li>
        </ul>
        <button
          className="mt-4 bg-gray-800 text-white font-bold py-2 px-4 rounded"
          onClick={handleClick}
        >
          Get Started
        </button>
      </div>
    </div>
  );
}
