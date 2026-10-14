export default function Loading() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-slate-950 px-6 text-white" role="status" aria-live="polite">
      <div className="flex flex-col items-center gap-4 text-center">
        <div className="h-10 w-10 animate-spin rounded-full border-4 border-white/15 border-t-cyan-400" aria-hidden="true" />
        <p className="text-sm text-slate-300">Loading TECHZONE BizOS...</p>
      </div>
      <span className="sr-only">Please wait</span>
    </main>
  );
}
