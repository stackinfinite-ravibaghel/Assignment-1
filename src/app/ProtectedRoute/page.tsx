"use client"
import { ReactNode, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Cookies from 'universal-cookie';


interface ProtectedRouteProps {
  children: ReactNode;
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ children }) => {
  const router = useRouter();
  const cookies = new Cookies();
  const isAuthenticated = !!cookies.get('email'); // Check if email cookie exists

  useEffect(() => {
    if (!isAuthenticated) {
      router.push('/'); // Redirect to login page if not authenticated
    }
  }, [isAuthenticated, router]);

  return <>{isAuthenticated && children}</>; // Render children only if authenticated
};

export default ProtectedRoute;
