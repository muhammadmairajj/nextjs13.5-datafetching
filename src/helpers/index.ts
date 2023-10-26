async function getData() {
    const res = await fetch('https://jsonserver.reactbd.com/phone');
    if (!res.ok) {
      throw new Error('Failed to fetch data')
    }
    const data = res.json();
    return data;
}

async function getPhoneCaseData() {
  const res = await fetch('https://jsonserver.reactbd.com/phonecase');
  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }
  const data = res.json();
  return data;
}

async function getWatchesData() {
  const res = await fetch('https://jsonserver.reactbd.com/watch');
  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }
  const data = res.json();
  return data;
}

async function getAccessoriesData() {
  const res = await fetch('https://jsonserver.reactbd.com/accessories');
  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }
  const data = res.json();
  return data;
}


export const getSingleProduct = async (_id: number) => {
    const products = await getData();
    const singleItem = await products.find((item: any) => item._id === _id);
    return singleItem;
}

export const getSinglePhoneCase = async (_id: number) => {
  const products = await getPhoneCaseData();
  const singleItem = await products.find((item: any) => item._id === _id);
  // console.log(singleItem);
  return singleItem;
}

export const getSingleWatch = async (_id: number) => {
  const products = await getWatchesData();
  const singleItem = await products.find((item: any) => item._id === _id);
  // console.log(singleItem);
  return singleItem;
}

export const getSingleAccessories = async (_id: number) => {
  const products = await getAccessoriesData();
  const singleItem = await products.find((item: any) => item._id === _id);
  // console.log(singleItem);
  return singleItem;
}