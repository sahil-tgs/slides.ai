// middleware.ts
import { NextRequest } from "next/server";
import { clerkMiddleware } from "@clerk/nextjs/server";

function createRouteMatcher(routes: string[]) {
  return (req: NextRequest) => {
    // Check if the request path matches any of the given routes
    return routes.some((route) => {
      const regex = new RegExp(`^${route}$`);
      return regex.test(req.nextUrl.pathname);
    });
  };
}

const isPublicRoute = createRouteMatcher(["/sign-in(.*)", "/sign-up(.*)"]);

export default clerkMiddleware(async (auth, req) => {
  if (!isPublicRoute(req)) {
    await auth.protect();
  }
});

export const config = {
  matcher: [
    "/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)",
    "/(api|trpc)(.*)",
  ],
};
