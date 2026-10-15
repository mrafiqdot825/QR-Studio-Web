import {
  isRouteErrorResponse,
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "react-router";

import type { Route } from "./+types/root";
import "./app.css";

export const links: Route.LinksFunction = () => [
  { rel: "preconnect", href: "https://fonts.googleapis.com" },
  {
    rel: "preconnect",
    href: "https://fonts.gstatic.com",
    crossOrigin: "anonymous",
  },
  {
    rel: "stylesheet",
    href: "https://fonts.googleapis.com/css2?family=DM+Sans:ital,opsz,wght@0,9..40,400..700;1,9..40,400..700&family=Newsreader:ital,opsz,wght@0,6..72,400..700;1,6..72,400..700&display=swap",
  },
  {
    rel: "icon",
    type: "image/png",
    href: "/assets/images/icon.png",
  },
  {
    rel: "apple-touch-icon",
    href: "/assets/images/icon.png",
  },
];

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#FBEDE6" />
        <Meta />
        <Links />
      </head>
      <body className="min-h-screen bg-[#FBEDE6] text-[#1A1416] antialiased selection:bg-[#4A0F3A] selection:text-white">
        {children}
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}

export default function App() {
  return <Outlet />;
}

export function ErrorBoundary({ error }: Route.ErrorBoundaryProps) {
  let message = "Oops!";
  let details = "An unexpected error occurred.";
  let stack: string | undefined;

  if (isRouteErrorResponse(error)) {
    message = error.status === 404 ? "Page Not Found" : "Error";
    details =
      error.status === 404
        ? "The requested page could not be found."
        : error.statusText || details;
  } else if (import.meta.env.DEV && error && error instanceof Error) {
    details = error.message;
    stack = error.stack;
  }

  return (
    <main className="min-h-screen flex items-center justify-center p-6 bg-[#FBEDE6]">
      <div className="max-w-md w-full bg-white p-8 sm:p-10 rounded-[32px] border border-[#F0E2DA] shadow-[0_12px_32px_rgba(74,15,58,0.07)] text-center">
        <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold bg-[#D9D4F5] text-[#1A1416] mb-4">
          QRLab Notice
        </span>
        <h1 className="font-serif text-3xl sm:text-4xl font-bold text-[#1A1416] mb-2 leading-tight">
          {message === "Page Not Found" ? (
            <>
              Page not found, <br />
              <span className="italic font-normal text-[#4A0F3A]">take a breath.</span>
            </>
          ) : (
            message
          )}
        </h1>
        <p className="text-[#6B6468] text-sm sm:text-base mb-6 leading-relaxed">
          {details}
        </p>
        <a
          href="/"
          className="inline-flex items-center justify-center px-6 py-3 rounded-full bg-[#4A0F3A] hover:bg-[#5C1349] text-white font-medium transition-all shadow-[0_4px_14px_rgba(74,15,58,0.15)] active:scale-95"
        >
          Return to Home
        </a>
        {stack && (
          <pre className="mt-6 text-left p-4 bg-[#FDF6F2] rounded-2xl text-xs overflow-x-auto text-[#1A1416] border border-[#F0E2DA]">
            <code>{stack}</code>
          </pre>
        )}
      </div>
    </main>
  );
}
