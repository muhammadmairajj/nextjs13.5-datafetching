import { Products } from "@/components/Products";
import Title from "@/components/Title";

async function getData() {
  const res = await fetch('https://jsonserver.reactbd.com/phone');
  if (!res.ok) {
    throw new Error('Failed to fetch data')
  }
  const data = res.json();
  return data;
}


export default async function Home() {
  const products = await getData();
  // console.log("Products: ", products);
  return (
    <main>
      <Title title="Get Your Favorite Phone" />
     <Products products={products} />
    </main>
  )
}
