import { Products } from '@/components/Products';
import Title from '@/components/Title';
import React from 'react';

async function getData() {
  const res = await fetch('https://jsonserver.reactbd.com/amazonpro');
  if (!res.ok) {
    throw new Error('Failed to fetch data')
  }
  const data = res.json();
  return data;
}

const AmazonPro = async () => {
  const products = await getData();
  return (
    <div>
      <Title title="AmazonPro" />
      <Products products={products} />
    </div>
  )
}

export default AmazonPro;