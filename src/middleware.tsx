import type { NextRequest } from "next/server"
import { NextResponse } from "next/server"

// This function can be marked `async` if using `await` inside
export async function middleware(request: NextRequest) {
	console.log("middleware.ts, request.url:", request.url)

	return NextResponse.next()

}

// See "Matching Paths" below to learn more
export const config = {
	matcher: "/:path*",
}
