"use client";
import Category from "./Category/page";
import ProductView from "./ProductView/page";
import ProtectedRoute from "../ProtectedRoute/page";

export default function Dashboard() {
  return (
    // <ProtectedRoute>
      <main className="flex min-h-screen flex-col items-center justify-between w-full">
        <div className="w-full">
          <Category />
          <div>
            <ProductView />
          </div>
        </div>
      </main>
    // </ProtectedRoute>
  );
}
