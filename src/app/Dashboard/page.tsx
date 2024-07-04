"use client";
import Category from "./Category/page";
import ProtectedRoute from "../ProtectedRoute/page";
import { useEffect, useState } from "react";
import {
  fetchCategories,
  fetchDefaultProducts,
  fetchProductbyid,
} from "../Services/page";
import Product from "./Product/page";
import { useRouter } from "next/navigation";


export default function Dashboard() {

  const Router = useRouter();

  const [categories, setCategories] = useState<any[]>([]);
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
  useEffect(() => {
    fetchData();
  }, []);

  const handleCategoryClick = (categoryId: any) => {
    setSelectedCategoryId(categoryId);
    console.log("Clicked category ID:", categoryId);
  };

  const handleCart = (categoryId :any) => {
    console.log("Add to cart : ",categoryId)
    Router.push('/Cart', categoryId)
  }

  // Fetch Product by id or default
  useEffect(() => {
    const _fetchData = async () => {
      try {
        if (selectedCategoryId) {
          // Fetch products Id
          const productResponse = await fetchProductbyid(selectedCategoryId);
          setProducts(productResponse.products);
          console.log("Fetch by Category ID :" ,productResponse)
        } else {
          // Fetch default products when selectedCategoryId is null or default
          const defaultProductResponse = await fetchDefaultProducts();
          // Adjust fetchProducts to handle default case
          setProducts(defaultProductResponse.products);
          console.log("Fetch by Default :" ,defaultProductResponse)
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
          <Product products={products} 
          handleCart={handleCart}/>
        </div>
      </div>
    </main>
    // </ProtectedRoute>
  );
}
