"use client";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import ProtectedRoute from "../ProtectedRoute/page";
import Category from "./Category/page";
import Product from "./Product/page";
import {
  addProductToCart,
  fetchCartsList,
  fetchCategories,
  fetchDefaultProducts,
  fetchProductbyid,
} from "../Services/page";
import Cookies from "universal-cookie";

export default function Dashboard() {
  const cookies = new Cookies();
  const Router = useRouter();
  const userId = cookies.get("userId");
  const [categories, setCategories] = useState<any[]>([]);
  const [cartList, setCartList] = useState<any[]>([]);
  const [selectedCategoryId, setSelectedCategoryId] = useState<string | null>(
    null
  );

  const [products, setProducts] = useState<any[]>([]);

  // Fetch Category
  const fetchData = async () => {
    try {
      const categoriesData = await fetchCategories();
      setCategories(categoriesData);
      // console.log(categoriesData);
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };

  // Fetch Category
  const fetchCartsData = async () => {
    try {
      const cartsList = await fetchCartsList(userId);
      console.log(cartsList.carts);
      //productId
      setCartList(cartsList.carts);
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };
  useEffect(() => {
    fetchData();
    fetchCartsData();
  }, []);

  // Category
  const handleCategoryClick = (categoryId: any) => {
    setSelectedCategoryId(categoryId);
    console.log("Clicked category ID:", categoryId);
  };

  // Product
  const handleCart = async (productId: any) => {
    console.log("Add to cart : ", productId, userId);
    // Router.push('/Cart', categoryId)
    try {
      const res = await addProductToCart(productId, userId);
      console.log(res);
    } catch (error) {
      console.log(error);
    }
  };

  // Product id=${id}&
  const handleProductDetails = (
    name: string,
    image: any,
    price: number,
    id: any
  ) => {
    // Router.push(`/ProductDetails ,${productId}`);
    Router.push(
      `/ProductDetails?name=${name}&image=${image}&price=${price}&productid=${id}`
    );
    // Router.push(`/detail/${products}`);
  };

  // Fetch Product by id or default
  useEffect(() => {
    const _fetchData = async () => {
      try {
        if (selectedCategoryId) {
          // Fetch products Id
          const productResponse = await fetchProductbyid(selectedCategoryId);
          setProducts(productResponse.products);
          console.log("Fetch by Category ID :", productResponse);
        } else {
          // Fetch default products when selectedCategoryId is null or default
          const defaultProductResponse = await fetchDefaultProducts();
          // Adjust fetchProducts to handle default case
          setProducts(defaultProductResponse.products);
          console.log("Fetch by Default :", defaultProductResponse);
        }
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    _fetchData();
  }, [selectedCategoryId]); // Fetch data again when selectedCategoryId changes

  return (
    // <ProtectedRoute>
    <main className="flex min-h-screen flex-col items-center justify-between w-full">
      <div className="w-full">
        <Category
          categories={categories}
          handleCategoryClick={handleCategoryClick}
        />
        <div className="w-ful">
          <Product
            products={products}
            handleCart={handleCart}
            handleProductDetails={handleProductDetails}
            cartList={cartList}
          />
        </div>
      </div>
    </main>
    // </ProtectedRoute>
  );
}
