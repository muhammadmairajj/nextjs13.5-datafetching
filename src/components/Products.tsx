"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";

interface ProductProps {
  _id: number;
  title: string;
  description: string;
  image: string;
  price: number;
  previousPrice: number;
  isNew: boolean;
  category: string;
  brand: string;
}

interface Props {
  products: ProductProps[];
}

export const Products = ({ products }: Props) => {
  return (
    <div className="max-w-screen-xl mx-auto grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-10 py-10">
      {products?.map((item) => {
        return (
          <Link
            key={item?._id}
            href={{ pathname: `/singleproduct`, query: { _id: item?._id } }}
          >
            <div className="border-[1px] border-gray-300 rounded-md overflow-hidden hover:border-gray-950 duration-300">
              <Image
                src={item?.image}
                alt="Mobile Phone Image"
                width={500}
                height={500}
                className="w-full h-80 object-cover"
              />
              <div className="px-4 pb-2 text-sm flex flex-col gap-1">
                <p className="text-gray-600 text-lg">{item?.title}</p>
                <p className="font-semibold">${item?.price}</p>
                <div className="flex justify-between items-center">
                  <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">Add To Cart</button>
                  <button className="uppercase text-md font-semibold hover:text-blue-700 duration-200">
                    More Info
                  </button>
                </div>
              </div>
            </div>
          </Link>
        );
      })}
    </div>
  );
};
