import React from "react";
import Link from "next/link";

const Header = () => {
  const navigation = [
    { _id: 1, title: "Phone", href: "/" },
    { _id: 2, title: "Phone Case", href: "/phonecase" },
    { _id: 3, title: "Watches", href: "/watches" },
    { _id: 4, title: "Accessories", href: "/accessories" },
    // { _id: 5, title: "AmazonPro", href: "/amazonpro" },
  ];
  return (
    <div className="w-full h-20 bg-blue-700 text-gray-200 sticky top-0 z-50">
      <div className="max-w-screen-xl mx-auto h-full flex items-center justify-between">
        <Link href={"/"} className="mx-auto">
          <h2 className="text-2xl text-white">Mobile Store</h2>
        </Link>
        <div className="flex items-center gap-5 mx-auto">
          {navigation.map((item) => (
            <Link
              href={item.href}
              key={item._id}
              className="uppercase text-sm hover:text-white duration-200"
            >
              {item.title}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Header;
