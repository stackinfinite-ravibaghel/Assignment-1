"use client";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import Cookies from "universal-cookie";

import Category from "./Category/page";
import Product from "./Product/page";
import Paginationcom from "./PaginationCom/page";

import {
  addProductToCart,
  increaseProductToCart,
  deleteProductToCart,
  fetchCartsList,
  fetchCategories,
  fetchDefaultProducts,
  fetchProductbyid,
  addProductToWishList,
} from "../Services/page";

export default function Dashboard() {
  const Router = useRouter();

  const cookies = new Cookies();
  const userId = cookies.get("userId");

  const [categories, setCategories] = useState<any[]>([]);
  const [cartList, setCartList] = useState<any[]>([]);
  const [products, setProducts] = useState<any[]>([]);
  const [selectedCategoryId, setSelectedCategoryId] = useState<string | null>(
    null
  );
  const [totalPages, setTotalPages] = useState<number>(1);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [totalProducts, setTotalProducts] = useState<number>(0);

  // Fetch CategoryData
  const fetchData = async () => {
    try {
      const categoriesData = await fetchCategories();
      setCategories(categoriesData);
      // console.log(categoriesData);
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };

  // Category
  const handleCategoryClick = (categoryId: any) => {
    setSelectedCategoryId(categoryId);
    setCurrentPage(1); // Reset current page when category changes
    // console.log("Clicked category ID:", categoryId);
  };

  // Fetch CartData
  const fetchCartsData = async () => {
    try {
      const cartsList = await fetchCartsList(userId);
      // console.log("Cart Array :", cartsList.carts);
      setCartList(cartsList.carts);
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };
  useEffect(() => {
    fetchData();
    fetchCartsData();
  }, []);

  // Add Product to Cart
  const handleAddCart = async (productId: any) => {
    console.log("Add to cart : ", productId, userId);
    // Router.push('/Cart', categoryId)
    try {
      const res = await addProductToCart(productId, userId);
      toast.success("Add to Cart successful.");
      console.log(res);
    } catch (error) {
      console.log(error);
    }
  };

  // Add Product To WishList
  const handleAddProductToWishList = async (productId: any) => {
    // console.log("Add to WishList : ", productId);
    try {
      const res = await addProductToWishList(productId, userId);
      toast.success("Add to WishList successful.");
      // console.log("Product Added to WishList", res);
    } catch (error) {
      console.log(error);
    }
  };

  const handleIncreaseProductQuantity = async (
    productId: any,
    quantity: any
  ) => {
    console.log(
      "Increase Product Quantity From cart : ",
      productId,
      userId,
      quantity
    );

    try {
      const resInCart = await increaseProductToCart(
        productId,
        userId,
        quantity
      );

      console.log(resInCart.data);
    } catch (error) {
      console.log(error);
    }
  };

  const handleDeleteCart = async (productId: any) => {
    console.log("Delete From cart : ", productId, userId);
    // Router.push('/Cart', categoryId)
    try {
      const res = await deleteProductToCart(productId, userId);

      console.log(res.data);
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
    // Router.push(`/detail/${products}`);
  };

  // Fetch Product by id or default

  const _fetchData = async (currentPage: number) => {
    try {
      let productResponse;
      if (selectedCategoryId) {
        // Fetch products Id
        productResponse = await fetchProductbyid(selectedCategoryId);
        // setProducts(productResponse.products);
        // console.log("Fetch by Category ID :", productResponse);
      } else {
        // Fetch default products when selectedCategoryId is null or default
        productResponse = await fetchDefaultProducts(currentPage);
        // Adjust fetchProducts to handle default case
        // setProducts(productResponse.products);
        // console.log("Fetch by Default :", productResponse);
      }
      setProducts(productResponse.products);
      setTotalPages(productResponse.pagination.totalPages);
      setTotalProducts(productResponse.pagination.totalProducts);
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };
  useEffect(() => {
    _fetchData(currentPage);
  }, [selectedCategoryId]); // Fetch data again when selectedCategoryId changes

  // Product
  // const fetchProducts = async (currentPage :number) => {
  //   try {
  //     let productResponse;
  //     if (selectedCategoryId) {
  //       // Fetch products by category and page
  //       productResponse = await fetchProductbyid(selectedCategoryId);
  //       console.log(productResponse);
  //     } else {
  //       // Fetch default products by page
  //       productResponse = await fetchDefaultProducts(currentPage);
  //       console.log(productResponse);
  //     }
  //     setProducts(productResponse.products);
  //     setTotalPages(productResponse.pagination.totalPages);
  //     setTotalProducts(productResponse.pagination.totalProducts);
  //     console.log(setProducts, "::" , setTotalPages);
  //   } catch (error) {
  //     console.error("Error fetching products:", error);
  //   }
  // };

  // useEffect(() => {
  //   fetchProducts(currentPage);
  // }, [selectedCategoryId, currentPage]);

  const handlePaginationChange = (currentPage: any) => {
    setCurrentPage(currentPage);
    _fetchData(currentPage);
    console.log("SetCurrentPage ", currentPage);
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-between w-full">
      <div className="w-full">
        <Category
          categories={categories}
          handleCategoryClick={handleCategoryClick}
        />
        <div className="w-ful">
          <Product
            products={products}
            cartList={cartList}
            handleAddCart={handleAddCart}
            handleIncreaseProductQuantity={handleIncreaseProductQuantity}
            handleProductDetails={handleProductDetails}
            handleAddProductToWishList={handleAddProductToWishList}
          />
        </div>
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
    </main>
  );
}
