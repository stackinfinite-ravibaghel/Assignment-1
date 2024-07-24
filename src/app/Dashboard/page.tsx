"use client";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

import toast from "react-hot-toast";
import Cookies from "universal-cookie";

import Category from "./Category/page";
import Product from "./Product/page";
import Paginationcom from "./PaginationCom/page";

import { useAppDispatch } from "../../redux/hook";
import { setCategory } from "@/redux/features/categorySlice";
import { setProduct } from "@/redux/features/productSlice";

import {
  fetchCategories,
  fetchDefaultProducts,
  fetchProductbyid,
  addProductToCart,
  addProductToWishList,
  fetchCartsList,
  increaseProductToCart,
  deleteProductToCart,
} from "../Services/page";

export default function Dashboard() {
  const Router = useRouter();

  const cookies = new Cookies();
  const userId = cookies.get("userId");

  const dispatch = useAppDispatch();

  const [selectedCategoryId, setSelectedCategoryId] = useState<string | null>(
    null
  );

  const [currentPage, setCurrentPage] = useState<number>(1);

  // const [cartList, setCartList] = useState<any[]>([]);

  // Fetch CategoryData
  const fetchCategoryData = async () => {
    try {
      const categoriesData = await fetchCategories();

      dispatch(setCategory(categoriesData));

      // console.log("categoriesData",categoriesData);
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };
  useEffect(() => {
    fetchCategoryData();
  }, []);

  // Category - Handle Category Click
  const handleCategoryClick = (categoryId: string) => {
    setSelectedCategoryId(categoryId);
    setCurrentPage(1);
    // console.log("Clicked category ID:", categoryId);
  };

  // Fetch ProductData by id or default
  const _fetchProductByCategoryId = async (currentPage: number) => {
    try {
      let productResponse;
      if (selectedCategoryId) {
        // Fetch products by Id
        productResponse = await fetchProductbyid(selectedCategoryId);
      } else {
        // Fetch products by default
        productResponse = await fetchDefaultProducts(currentPage);
      }
      dispatch(
        setProduct({
          products: productResponse.products,
          pagination: productResponse.pagination,
        })
      );
      // console.log("Products and Pagination:", productResponse)
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };
  useEffect(() => {
    _fetchProductByCategoryId(currentPage);
  }, [selectedCategoryId]); // Fetch data again when selectedCategoryId changes

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

  const handlePaginationChange = (currentPage: any) => {
    setCurrentPage(currentPage);
    _fetchProductByCategoryId(currentPage);
    // console.log("SetCurrentPage ", currentPage);
  };

  const handleProductDetails = (
    name: string,
    image: any,
    price: number,
    id: any
  ) => {
    return () => {
      Router.push(
        `/ProductDetails?name=${name}&image=${image}&price=${price}&productid=${id}`
      );
      // Router.push(`/ProductDetails ,${productId}`);
      // Router.push(`/detail/${products}`);
    };
  };

  // // Fetch CartData
  // const fetchCartsData = async () => {
  //   try {
  //     const cartsList = await fetchCartsList(userId);
  //     // console.log("Cart Array :", cartsList.carts);
  //     setCartList(cartsList.carts);
  //   } catch (error) {
  //     console.error("Error fetching products:", error);
  //   }
  // };
  // useEffect(() => {
  //   fetchCartsData();
  // }, []);

  // const handleIncreaseProductQuantity = async (
  //   productId: any,
  //   quantity: any
  // ) => {
  //   console.log(
  //     "Increase Product Quantity From cart : ",
  //     productId,
  //     userId,
  //     quantity
  //   );

  //   try {
  //     const resInCart = await increaseProductToCart(
  //       productId,
  //       userId,
  //       quantity
  //     );

  //     console.log(resInCart.data);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  // const handleDeleteCart = async (productId: any) => {
  //   console.log("Delete From cart : ", productId, userId);
  //   // Router.push('/Cart', categoryId)
  //   try {
  //     const res = await deleteProductToCart(productId, userId);

  //     console.log(res.data);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

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

  return (
    // <ProtectedRoute>
    <main className="flex min-h-screen flex-col items-center justify-between w-full">
      <div className="w-full">
        <Category handleCategoryClick={handleCategoryClick} />
        <div className="w-full">
          <Product
            // cartList={cartList}
            handleAddCart={handleAddCart}
            handleProductDetails={handleProductDetails}
            handleAddProductToWishList={handleAddProductToWishList}
          />
        </div>
      </div>
      {/* pagination  */}
      <div className="w-full bg-white py-2 flex justify-center">
        <Paginationcom
          currentPage={currentPage}
          handlePaginationChange={handlePaginationChange}
        />
      </div>
    </main>
    // </ProtectedRoute>
  );
}
