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
  // console.log("SignIn", data);
  return data;
};
// -------------Sign In---------------------

// -------------Sign Up---------------------
export const Signup = async (name: string, email: string, password: string) => {
  const responseSignUp = await fetch(`${apiUrl}/auth/sign-up`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ name, email, password }),
  });

  const data = await responseSignUp.json();
  // console.log("SignUp",data)
  return data;
};
// -------------Sign Up---------------------

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

// -------------Fetch CartList------------------

export const fetchCartsList = async (userId: any) => {
  const responseFetchCartsList = await fetch(
    `${apiUrl}/carts/products/${userId}`
  );
  const data = await responseFetchCartsList.json();
  // console.log("fetchCartsList", data);
  return data;
};
// -------------Fetch CartList------------------

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
  // console.log("addProductToCart", data);
  return data;
};
// -------------Add Product to Cart---------------------

// -------------Increase Product to Cart------------------

export const increaseProductToCart = async (
  productId: any,
  userId: string,
  quantity: any
) => {
  const responseIncreaseProductToWishList = await fetch(
    `${apiUrl}/carts/increase/${productId}`,
    {
      method: "put",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        userId: userId,
      }),
    }
  );

  const data = await responseIncreaseProductToWishList.json();
  // console.log("increaseProductToCart", data);
  return data;
};
// -------------Increase Product to Cart------------------

// -------------Decrease Product to Cart------------------

export const decreaseProductToCart = async (
  productId: any,
  userId: string,
  quantity: any
) => {
  const responseDecreaseProductToWishList = await fetch(
    `${apiUrl}/carts/decrease/${productId}`,
    {
      method: "put",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        userId: userId,
      }),
    }
  );

  const data = await responseDecreaseProductToWishList.json();
  // console.log("decreaseProductToCart", data);
  return data;
};
// -------------Decrease Product to Cart------------------

// -------------Delete Product to Cart------------------

export const deleteProductToCart = async (productId: any, userId: string) => {
  const responseDeleteProductToWishList = await fetch(
    `${apiUrl}/carts/delete/${productId}`,
    {
      method: "delete",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        userId: userId,
      }),
    }
  );

  const data = await responseDeleteProductToWishList.json();
  // console.log("deleteProductToCart", data);
  return data;
};
// -------------Delete Product to Cart------------------

// -------------Fetch WishList------------------

export const fetchWishList = async (userId: any) => {
  const responseFetchWishList = await fetch(`${apiUrl}/wishlist/${userId}`);
  const data = await responseFetchWishList.json();
  // console.log("fetchWishList", data);
  return data;
};
// -------------Fetch WishList------------------

// -------------Add Product to WishList------------------

export const addProductToWishList = async (productId: any, userId: string) => {
  const responseAddProductToWishList = await fetch(`${apiUrl}/wishlist/add`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      userId: userId,
      productId: productId,
    }),
  });

  const data = await responseAddProductToWishList.json();
  // console.log("addProductToWishList", data);
  return data;
};
// -------------Add Product to WishList------------------

// -------------Remove Product to WishList------------------

export const removeProductToWishList = async (
  productId: any,
  userId: string
) => {
  const responseRemoveProductToWishList = await fetch(
    `${apiUrl}/wishlist/remove`,
    {
      method: "delete",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        userId: userId,
        productId: productId,
      }),
    }
  );

  const data = await responseRemoveProductToWishList.json();
  // console.log("removeProductToWishList", data);
  return data;
};
// -------------Remove Product to WishList------------------

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
