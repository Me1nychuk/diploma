import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(req: NextRequest) {
  const token = req.cookies.get("googleToken"); // Отримуємо токен з кукі

  if (!token) {
    return NextResponse.redirect(new URL("/login", req.url)); // Перенаправляємо на сторінку логіну, якщо токен відсутній
  }

  return NextResponse.next(); // Продовжуємо запит, якщо токен є
}

// Налаштовуємо middleware для конкретних сторінок або шляхів
export const config = {
  matcher: "/google/success", // Призначаємо шляхи, де має працювати middleware
};
