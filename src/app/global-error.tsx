"use client";

import "./globals.css";

export default function GlobalError({
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <html lang="en">
      <body className="flex min-h-screen flex-col items-center justify-center gap-4 bg-slate-950 px-6 text-center text-white">
        <h1 className="text-3xl font-bold">Application error</h1>
        <p className="text-slate-400">
          The application encountered an unexpected error.
        </p>
        <button
          onClick={reset}
          className="rounded-xl bg-cyan-400 px-6 py-3 font-semibold text-slate-950 hover:bg-cyan-300"
        >
          Try again
        </button>
      </body>
    </html>
  );
}
