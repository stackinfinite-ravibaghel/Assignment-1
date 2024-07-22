"use client";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import Cookies from "universal-cookie";
import toast from "react-hot-toast";

import Category from "./Category/page";
import Product from "./Product/page";
import Paginationcom from "./PaginationCom/page";

import {
  fetchCategory,
  fetchProduct,
  fetchProductbyCategoryId,
  addProductToCart,
  addProductToWishList,
} from "../ServerAction/action";

const Dashboard = () => {
  const cookies = new Cookies();
  const userId = cookies.get("userId");
  const Router = useRouter();

  const [categories, setCategories] = useState([]);
  const [products, setProducts] = useState([]);
  const [selectedCategoryId, setSelectedCategoryId] = useState<string | null>(
    null
  );
  const [totalPages, setTotalPages] = useState<number>(1);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [totalProducts, setTotalProducts] = useState<number>(0);

  // >>>>>>>>>>>Fetch Category<<<<<<<<<<<
  useEffect(() => {
    const fetchCategoryData = async () => {
      const categoryData = await fetchCategory();
      setCategories(categoryData);
    };
    fetchCategoryData();
  }, []);

  // >>>>>>>>>>>fetch Product by CategoryId<<<<<<<<<<<
  const handleCategoryClick = async (categoryId: string) => {
    const productsByCategory = await fetchProductbyCategoryId(
      categoryId,
      currentPage
    );
    setCurrentPage(1)
    setSelectedCategoryId(categoryId);
    setProducts(productsByCategory.products);
    // console.log(products);
    return productsByCategory.products;
  };

  // >>>>>>>>>>>Fetch Product by id or default<<<<<<<<<<<
  const fetchProductData = async (currentPage: number) => {
    try {
      let productResponse;
      if (selectedCategoryId) {
        productResponse = await fetchProductbyCategoryId(
          selectedCategoryId,
          currentPage
        );
      } else {
        productResponse = await fetchProduct(currentPage);
      }
      // console.log("Product Data Update");
      setProducts(productResponse.products);
      setTotalPages(productResponse.pagination.totalPages);
      setTotalProducts(productResponse.pagination.totalProducts);
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };
  useEffect(() => {
    fetchProductData(currentPage);
  }, [selectedCategoryId]);

  // Add Product to Cart
  const handleAddCart = async (productId: any) => {
    try {
      await addProductToCart(productId, userId);
      toast.success("Add to Cart successful.");
    } catch (error) {
      console.log(error);
    }
  };

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
  };

  // Add Product To WishList
  const handleAddProductToWishList = async (productId: any) => {
    try {
      await addProductToWishList(productId, userId);
      toast.success("Add to WishList successful.");
    } catch (error) {
      console.log(error);
    }
  };

  const handlePaginationChange = async (currentPage: any) => {
    setCurrentPage(currentPage);
    if (selectedCategoryId) {
      try {
        const productResponsePage = await fetchProductbyCategoryId(
          selectedCategoryId,
          currentPage
        );
        setProducts(productResponsePage.products);
        setTotalPages(productResponsePage.pagination.totalPages);
        setTotalProducts(productResponsePage.pagination.totalProducts);
        // console.log(
        //   "handlePaginationChange - currentPage",
        //   currentPage,
        //   "selectedCategoryId",
        //   selectedCategoryId
        // );
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    } else {
      fetchProductData(currentPage);
      // console.log("handlePaginationChange  currentPage", currentPage);
    }
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-between w-full">
      <div className="w-full">
        <div className="w-ful">
          <Category
            categories={categories}
            handleCategoryClick={handleCategoryClick}
          />
        </div>

        {/* Product */}
        <div className="w-ful">
          <Product
            products={products}
            handleAddCart={handleAddCart}
            handleProductDetails={handleProductDetails}
            handleAddProductToWishList={handleAddProductToWishList}
          />
        </div>

        {/* pagination  */}
        <div className="w-full bg-white py-2 flex justify-center">
          <Paginationcom
            totalPages={totalPages}
            currentPage={currentPage}
            totalProducts={totalProducts}
            handlePaginationChange={handlePaginationChange}
          />
        </div>
      </div>
    </main>
  );
};
export default Dashboard;


