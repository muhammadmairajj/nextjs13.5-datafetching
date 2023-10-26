import { Products } from "@/components/Products";
import Title from "@/components/Title";
import React from "react";

async function getData() {
  const res = await fetch("https://jsonserver.reactbd.com/phonecase");
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  const data = res.json();
  return data;
}

const PhoneCase = async () => {
  const products = await getData();
  return (
    <div>
        <Title title="Make your phone looks cool with beautiful Phone Case" />
        <Products products={products} />
    </div>
  );
};

export default PhoneCase;
