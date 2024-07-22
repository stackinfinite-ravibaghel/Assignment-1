"use server";

// Base URL for your APIs
const apiUrl = "http://192.168.1.2:8001/api";

// -------------Sign In---------------------
export const SignIn = async (e: any) => {
  let email: string = e.email;
  let password: string = e.password;

  const responseLogin = await fetch(`${apiUrl}/auth/sign-in`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email, password }),
  });

  const data = await responseLogin.json();
  // console.log("SignIn",data)
  return data;
};
// -------------Sign In---------------------

// -------------Category---------------------
export const fetchCategory = async () => {
  const responseCategory = await fetch(`${apiUrl}/categories`);

  const data = await responseCategory.json();
  // console.log("fetchCategory",data)
  return data;
};
// -------------Category---------------------

// -------------Product---------------------
export const fetchProduct = async (currentPage: any) => {
  const responseProduct = await fetch(`${apiUrl}/products?page=${currentPage}`);

  const data = await responseProduct.json();
  const products = data.products;
  // console.log("fetchProduct",data)
  // console.log("fetchProduct",products)
  return data;
};
// -------------Product---------------------

// -------------Product by Category Id-------------------
export const fetchProductbyCategoryId = async (
  categoryId: any,
  currentPage: any
) => {
  // console.log("categoryId", categoryId);
  // console.log("currentPage", currentPage);

  const responseCategoryIdProduct = await fetch(
    `${apiUrl}/products/?categoryId=${categoryId}&page=${currentPage}`
  );

  const data = await responseCategoryIdProduct.json();
  // console.log("fetchProductbyCategoryId",data)
  return data;
};
// -------------Product by Category Id-------------------


// -------------Add Product to Cart---------------------
export const addProductToCart = async (productId: any, userId: any) => {
  const responseAddProductToCart = await fetch(
    `${apiUrl}/carts/add/${productId}`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        userId: userId,
        quantity: 1,
      }),
    }
  );

  const data = await responseAddProductToCart.json();
  console.log("addProductToCart", data);
  return data;
};
// -------------Add Product to Cart---------------------

// -------------Add Product to WishList------------------

export const addProductToWishList = async (productId: any, userId: string) => {
  const responseWish = await fetch(`${apiUrl}/wishlist/add`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      userId: userId,
      productId: productId,
    }),
  });

  const data = await responseWish.json();
  console.log("addProductToWishList", data);
  return data;
};
// -------------Add Product to WishList------------------

//------------Product by Category Id or Default----------
// export const fetchProductData = async (categoryId: string) => {

//   console.log("Action", categoryId);

//   if (categoryId) {

//     const responseCategoryIdProduct = await fetch(
//       `${apiUrl}/products/?categoryId=${categoryId}`
//     );
//     const data = await responseCategoryIdProduct.json();
//     const products = data.products;
//     // console.log("ProductByCategoryId",products)
//     return products;
//   } else {
//     const responseProduct = await fetch(`${apiUrl}/products`);

//     const data = await responseProduct.json();
//     const products = data.products;
//     // console.log("DefaultProduct",products)
//     return products;
//   }
// };

//------------Product by Category Id or Default----------



// // -------------Product by Category Id & Page-------------------
// export const fetchProductbyCategoryIdPage = async (
//   categoryId: any,
//   currentPage: any
// ) => {
//   console.log("fetchProductbyCategoryIdpage categoryId", categoryId);
//   console.log("fetchProductbyCategoryIdpage currentPage", currentPage);

//   const responseCategoryIdProductPage = await fetch(
//     `${apiUrl}/products/?categoryId=${categoryId}&page=${currentPage}`
//   );

//   const data = await responseCategoryIdProductPage.json();
//   console.log("fetchProductbyCategoryIdpage", data);
//   return data;
// };
// // -------------Product by Category Id & Page-------------------