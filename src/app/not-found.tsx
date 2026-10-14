import Link from "next/link";

export default function NotFound() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-4 bg-slate-950 px-6 text-center text-white">
      <p className="text-sm font-semibold text-cyan-400">404</p>
      <h1 className="text-3xl font-bold">Page not found</h1>
      <p className="text-slate-400">
        The page you are looking for does not exist.
      </p>
      <Link
        href="/"
        className="rounded-xl bg-cyan-400 px-6 py-3 font-semibold text-slate-950 hover:bg-cyan-300"
      >
        Back to home
      </Link>
    </main>
  );
}
