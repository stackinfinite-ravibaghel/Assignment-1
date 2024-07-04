


import { NextResponse } from 'next/server';
import { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  const authEmail = request.cookies.get("email")?.value;
  console.log('Middleware Executed');
  // console.log("Auth Email : " + authEmail);
  // console.log(request.nextUrl.pathname);

  // List of paths that do not require authentication
  const unsecuredPaths = ['/', '/SignUp'];


  // Check if the current path does not require authentication
  const isUnsecuredPath = unsecuredPaths.includes(request.nextUrl.pathname);

  if (isUnsecuredPath) {
    // Accessing Unsecured Route
    if (authEmail) {
      // Redirect authenticated users away from unsecured paths
      return NextResponse.redirect(new URL('/Dashboard', request.url));
    }
  } else {
    // Accessing Secured Route
    if (!authEmail) {
      // Redirect unauthenticated users to the root path
      return NextResponse.redirect(new URL('/', request.url));
    }
  }
}

  // check authentication on these Section.
  export const config = {
    // matcher: '/about/:path*',
    // matcher: '/api/:path*',
    // matcher : '/',
    matcher : ['/', '/SignUp','/Dashboard', '/Detail', '/Cart']
  }
