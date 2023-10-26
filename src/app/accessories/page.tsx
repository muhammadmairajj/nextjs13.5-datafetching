import { Products } from '@/components/Products';
import Title from '@/components/Title';
import React from 'react';

async function getData() {
  const res = await fetch('https://jsonserver.reactbd.com/accessories');
  if (!res.ok) {
    throw new Error('Failed to fetch data')
  }
  const data = res.json();
  return data;
}

const Accessories = async () => {
  const products = await getData();
  return (
    <div>
      <Title title="Find your Accessories" />
      <Products products={products} />
    </div>
  )
}

export default Accessories;