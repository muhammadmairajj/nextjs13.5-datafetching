"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import {
  getSingleProduct,
  getSinglePhoneCase,
  getSingleWatch,
  getSingleAccessories,
} from "@/helpers";

type Props = {
  searchParams: { [key: string]: string | string[] | undefined };
};

const SingleProduct = ({ searchParams }: Props) => {
  console.log("seachParams", searchParams);
  const _idString = searchParams?._id;
  const _id = Number(_idString);

  const [product, setProduct] = useState<any>(null);
  const [phoneCase, setPhoneCase] = useState<any>(null);
  const [watch, setWatch] = useState<any>(null);
  const [accessories, setAccessories] = useState<any>(null);

  useEffect(() => {
    const fetchProduct = async () => {
      const productData = await getSingleProduct(_id);
      setProduct(productData);
    };

    const fetchPhoneCase = async () => {
      const phoneCaseData = await getSinglePhoneCase(_id); // Replace with the actual function name
      setPhoneCase(phoneCaseData);
    };

    const fetchWatches = async () => {
      const phoneCaseData = await getSingleWatch(_id); // Replace with the actual function name
      setWatch(phoneCaseData);
    };

    const fetchAccessories = async () => {
      const phoneCaseData = await getSingleAccessories(_id); // Replace with the actual function name
      setAccessories(phoneCaseData);
    };

    // Use Promise.all to fetch both product and phone case data in parallel
    Promise.all([
      fetchProduct(),
      fetchPhoneCase(),
      fetchWatches(),
      fetchAccessories(),
    ]).catch((error) => {
      console.error("Error fetching data:", error);
    });
  }, [_id]);

  function capitalizeFirstLetter(string: string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  return (
    <div className="max-w-screen-xl mx-auto flex items-center gap-10 xl:gap-0">
      <Image
        src={
          product?.image ||
          phoneCase?.image ||
          watch?.image ||
          accessories?.image
        } // Use the image from the resolved data
        width={500}
        height={500}
        alt="Single Product Image"
      />
      <div className="flex flex-col gap-2">
        <p className="text-xl font-semibold ">
          {product ? capitalizeFirstLetter(product.title) : ""}
          {phoneCase ? capitalizeFirstLetter(phoneCase.title) : ""}
          {watch ? capitalizeFirstLetter(watch.title) : ""}
          {accessories ? capitalizeFirstLetter(accessories.title) : ""}
        </p>
        <p>
          {product?.description ||
            phoneCase?.description ||
            watch?.description ||
            accessories?.description}
        </p>
        <p className="text-md font-semibold text-gray-500 flex gap-4">
          Price: $
          {product?.price ||
            phoneCase?.price ||
            watch?.price ||
            accessories?.price}
          <s className="text-red-500">
            $
            {product?.previousPrice ||
              phoneCase?.previousPrice ||
              watch?.previousPrice ||
              accessories?.previousPrice}
          </s>
        </p>
        <p className="text-md font-semibold text-gray-500">
          Category: {product ? capitalizeFirstLetter(product.category) : ""}
          {phoneCase ? capitalizeFirstLetter(phoneCase.category) : ""}
          {watch ? capitalizeFirstLetter(watch.category) : ""}
          {accessories ? capitalizeFirstLetter(accessories.category) : ""}
        </p>
        <p className="text-md font-semibold text-gray-500">
          Product Brand:{" "}
          {product?.brand ||
            phoneCase?.brand ||
            watch?.brand ||
            accessories?.brand}
        </p>
        <p className="text-md font-semibold text-gray-500">
          Product Type:{" "}
          {(product?.isNew && "New Product") ||
            (phoneCase?.isNew && "New Product") ||
            (watch?.isNew && "New Product") ||
            (accessories?.isNew && "New Product")}
        </p>
      </div>
    </div>
  );
};

export default SingleProduct;

// import React from "react";
// import Image from "next/image";
// import { getSingleProduct, getSinglePhoneCase } from "@/helpers";

// type Props = {
//   searchParams: { [key: string]: string | string[] | undefined };
// };

// const SingleProduct = async ({ searchParams }: Props) => {
//   // console.log(searchParams);
//   const _idString = searchParams?._id;
//   // console.log(_idString);
//   // console.log(typeof _idString);  // string;
//   const _id = Number(_idString);
//   // console.log(_id); // Number

//   const product = await getSingleProduct(_id);
//   // console.log(product);

//   function capitalizeFirstLetter(string: string) {
//     return string.charAt(0).toUpperCase() + string.slice(1);
//   }
//   return (
//     <div className="max-w-screen-xl mx-auto flex items-center gap-10 xl:gap-0">
//       <Image
//         src={product?.image}
//         width={500}
//         height={500}
//         alt="Single Product Image"
//       />
//       <div className="flex flex-col gap-2">
//         <p className="text-xl font-semibold ">{product ? capitalizeFirstLetter(product.title) : ''}</p>
//         <p>{product?.description}</p>
//         <p className="text-md font-semibold text-gray-500 flex gap-4">
//           Price: ${product?.price} <s className="text-red-500">${product?.previousPrice}</s>
//         </p>
//         <p className="text-md font-semibold text-gray-500">
//           Category: {product ? capitalizeFirstLetter(product.category) : ''}
//         </p>
//         <p className="text-md font-semibold text-gray-500">
//           Product Brand: {product?.brand}
//         </p>
//         <p className="text-md font-semibold text-gray-500">
//           Product Type: {product?.isNew && "New Product"}
//         </p>
//       </div>
//     </div>
//   );
// };

// export default SingleProduct;
