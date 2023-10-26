// "use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";

const NotFoundPage = () => {
  // For Button
  // const router = useRouter();

  // const backToHome = () => {
  //     router.push("/");
  // }
  return (
    <div className="py-10 flex flex-col items-center justify-center">
      <h1 className="mb-4 text-4xl leading-none tracking-tight text-gray-900 ">This Page is Not Exists</h1>
      <Link
        className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mt-5 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
        href={"/"}
      >
        Back to Home
      </Link>
    </div>
  );
};

export default NotFoundPage;
