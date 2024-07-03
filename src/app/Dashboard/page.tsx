"use client";
import Category from "./Category/page";
import ProductView from "./ProductView/page";
import ProtectedRoute from "../ProtectedRoute/page";
import { useEffect, useState } from "react";
import {
  fetchCategories,
  fetchDefaultProducts,
  fetchProductbyid,
} from "../Services/page";
import Product from "./ProductView/Product/page";

export default function Dashboard() {
  const [categories, setCategories] = useState<any[]>([]);
  const [selectedCategoryId, setSelectedCategoryId] = useState<string | null>(
    null
  );

  const fetchData = async () => {
    try {
      const categoriesData = await fetchCategories();
      setCategories(categoriesData);
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);
  const handleCategoryClick = (categoryId: any) => {
    setSelectedCategoryId(categoryId);
    console.log("Clicked category ID:", categoryId);
  };

  const [products, setProducts] = useState<any[]>([]); // State to hold products

  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const productResponse = await fetchProducts();
  //       setProducts(productResponse.products); // Assuming response.data has a 'products' array
  //       console.log(selectedCategoryId)
  //     } catch (error) {
  //       console.error("Error fetching data:", error);
  //     }
  //   };

  //   fetchData();
  // }, []);

  useEffect(() => {
    const _fetchData = async () => {
      try {
        if (selectedCategoryId) {
          const productResponse = await fetchProductbyid(selectedCategoryId);
          setProducts(productResponse.products);
        } else {
          // Fetch default products when selectedCategoryId is null or default
          const defaultProductResponse = await fetchDefaultProducts();
          // Adjust fetchProducts to handle default case
          setProducts(defaultProductResponse.products);
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
          <Product products={products} />
        </div>
      </div>
    </main>
    // </ProtectedRoute>
  );
}
