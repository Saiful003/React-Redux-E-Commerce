import { v4 as uuidv4 } from "uuid";
import { faker } from "@faker-js/faker";

export const allProducts = [
  {
    productId: "9d80a58c-3390-4577-a2a5-3059f7f321d6",
    productImage: "http://loremflickr.com/640/480/food?21613",
    productOfferPrice: "300.00",
    productOldPrice: "441.00",
    productTitle:
      "The beautiful range of Apple Naturalé that has an exciting mix of natural ingredients. With the Goodness of 100% Natural Ingredients",
    productVendorCode: "25609",
    category: "Electronics",
    quantity: 0,
  },
  {
    productId: "23222974-ff82-47ff-9dd6-0d24498ecd20",
    productImage: "http://loremflickr.com/640/480/food?63054",
    productOfferPrice: "238.00",
    productOldPrice: "408.00",
    productTitle:
      "The automobile layout consists of a front-engine design, with transaxle-type transmissions mounted at the rear of the engine and four wheel drive",
    productVendorCode: "79789",
    category: "Games",
    quantity: 0,
  },
  {
    productId: "a3625348-2582-43f7-a1b0-58b805d21c17",
    productImage: "http://loremflickr.com/640/480/food?71013",
    productOfferPrice: "204.00",
    productOldPrice: "450.00",
    productTitle:
      "The Nagasaki Lander is the trademarked name of several series of Nagasaki sport bikes, that started with the 1984 ABC800J",
    productVendorCode: "91434",
    category: "Outdoors",
    quantity: 0,
  },
  {
    productId: "2f2c2620-9f02-4fce-b337-7bccda6dfa06",
    productImage: "http://loremflickr.com/640/480/food?84945",
    productOfferPrice: "210.00",
    productOldPrice: "414.00",
    productTitle:
      "New range of formal shirts are designed keeping you in mind. With fits and styling that will make you stand apart",
    productVendorCode: "50196",
    category: "Computers",
    quantity: 0,
  },
  {
    productId: "02b4327c-2b30-4c08-9213-add971e80031",
    productImage: "http://loremflickr.com/640/480/food?59938",
    productOfferPrice: "244.00",
    productOldPrice: "467.00",
    productTitle:
      "Carbonite web goalkeeper gloves are ergonomically designed to give easy fit",
    productVendorCode: "17224",
    category: "Jewelery",
    quantity: 0,
  },
  {
    productId: "64fbf691-9e9a-408f-9090-0ae12357d8f5",
    productImage: "http://loremflickr.com/640/480/food?85452",
    productOfferPrice: "289.00",
    productOldPrice: "431.00",
    productTitle:
      "The Apollotech B340 is an affordable wireless mouse with reliable connectivity, 12 months battery life and modern design",
    productVendorCode: "81393",
    category: "Jewelery",
    quantity: 0,
  },
  {
    productId: "49ae170a-890b-4534-b087-0bcf61711423",
    productImage: "http://loremflickr.com/640/480/food?98648",
    productOfferPrice: "224.00",
    productOldPrice: "495.00",
    productTitle:
      "The Apollotech B340 is an affordable wireless mouse with reliable connectivity, 12 months battery life and modern design",
    productVendorCode: "35898",
    category: "Music",
    quantity: 0,
  },
  {
    productId: "43973576-9683-4f80-93e0-8424c7356690",
    productImage: "http://loremflickr.com/640/480/food?7493",
    productOfferPrice: "201.00",
    productOldPrice: "474.00",
    productTitle:
      "The Nagasaki Lander is the trademarked name of several series of Nagasaki sport bikes, that started with the 1984 ABC800J",
    productVendorCode: "92574",
    category: "Computers",
    quantity: 0,
  },
  {
    productId: "c53bc933-99df-452e-a310-7e5830cc8898",
    productImage: "http://loremflickr.com/640/480/food?13707",
    productOfferPrice: "221.00",
    productOldPrice: "459.00",
    productTitle:
      "Ergonomic executive chair upholstered in bonded black leather and PVC padded seat and back for all-day comfort and support",
    productVendorCode: "64323",
    category: "Tools",
    quantity: 0,
  },
  {
    productId: "a7958a5d-11d7-4c80-a862-9f4ae89833bb",
    productImage: "http://loremflickr.com/640/480/food?80947",
    productOfferPrice: "201.00",
    productOldPrice: "467.00",
    productTitle:
      "Carbonite web goalkeeper gloves are ergonomically designed to give easy fit",
    productVendorCode: "92936",
    category: "Toys",
    quantity: 0,
  },
];

// function generateFakeData() {
//   const allProducts = [];
//   for (let i = 1; i <= 10; i++) {
//     const obj = {
//       productId: uuidv4(),
//       productImage: faker.image.food(640, 480, true),
//       productOfferPrice: faker.commerce.price(200, 300),
//       productOldPrice: faker.commerce.price(400, 500),
//       productTitle: faker.commerce.productDescription(),
//       productVendorCode: faker.random.numeric(5),
//       category: faker.commerce.department(),
//     };
//     allProducts.push(obj);
//   }
//   console.log(allProducts);
// }
// generateFakeData();
