import { NextResponse } from 'next/server';
import { createSessionClient } from './backend/appwrite';

const protectedRoutes = {
  '/admin': 'admin',  // Only 'admin' users can access /admin
  '/dashboard': 'user',  // Only 'user' role can access /dashboard
};

export async function middleware(request) {
    const {account} = await createSessionClient(request);
  const { pathname } = request.nextUrl;
  //   // Check if the route is protected
  const requiredRole = protectedRoutes[pathname];
  if (!requiredRole) return NextResponse.next(); // Route is not protected
  
  //   // Get the session from cookies
  const sessionId = request.cookies.get('session')?.value;
  console.log("DEBUG CUER",sessionId);      
  
  if (!sessionId) {
      // Redirect to login if no session
      return NextResponse.redirect(new URL('/login', request.url));
    }

  
    
    const user = await account.get();
    console.log("DEBIG USER HERE",user);
    try {
        // Fetch the user details using the session

    // // Check if the user has the required role
    // if (user.roles.includes(requiredRole)) {
    //   return NextResponse.next(); // Allow access
    // } else {
    //   // Redirect to unauthorized if role is not sufficient
    //   return NextResponse.redirect(new URL('/unauthorized', request.url));
    // }
  } catch (error) {
    // If an error occurs (e.g., session is invalid), redirect to login
    return NextResponse.redirect(new URL('/login', request.url));
  }
}

export const config = {
  matcher: ['/admin', '/dashboard'], // Routes to apply the middleware
};
