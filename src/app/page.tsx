const features = [
  {
    number: "01",
    title: "Business Management",
    description: "Manage customers, vendors, staff and daily operations.",
  },
  {
    number: "02",
    title: "Sales & Finance",
    description: "Connect orders, invoices, payments, inventory and Khata.",
  },
  {
    number: "03",
    title: "One Link + QR",
    description: "Give every business its own digital presence.",
  },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <header className="border-b border-white/10">
        <nav
          aria-label="Main navigation"
          className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-4 px-5 py-5 sm:px-8 lg:px-12"
        >
          <a
            href="#home"
            className="text-xl font-bold tracking-tight sm:text-2xl"
            aria-label="TECHZONE BizOS home"
          >
            TECHZONE <span className="text-cyan-400">BizOS</span>
          </a>
          <span className="text-right text-sm text-slate-300">
            One Link. Full Business.
          </span>
        </nav>
      </header>

      <section
        id="home"
        className="mx-auto max-w-7xl px-5 py-20 sm:px-8 sm:py-24 lg:px-12 lg:py-32"
      >
        <p className="mb-6 inline-flex rounded-full border border-cyan-400/30 bg-cyan-400/10 px-4 py-2 text-sm font-medium text-cyan-300">
          Your Business Operating System
        </p>

        <h1 className="max-w-5xl text-4xl font-bold leading-tight tracking-tight sm:text-5xl lg:text-7xl">
          Run Your Entire Business.
          <span className="mt-2 block text-cyan-400">
            From One Powerful Dashboard.
          </span>
        </h1>

        <p className="mt-6 max-w-2xl text-base leading-8 text-slate-400 sm:text-lg">
          Manage customers, vendors, sales, inventory, bookings, payments and
          your digital storefront in one connected platform.
        </p>

        <div className="mt-9 flex flex-wrap gap-4">
          <a
            href="#features"
            className="inline-flex min-h-12 items-center justify-center rounded-xl bg-cyan-400 px-6 py-3 font-semibold text-slate-950 transition hover:bg-cyan-300 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-cyan-400"
          >
            Explore Features <span aria-hidden="true" className="ml-2">→</span>
          </a>
          <a
            href="mailto:hello@techzone.pk"
            className="inline-flex min-h-12 items-center justify-center rounded-xl border border-white/20 px-6 py-3 font-semibold transition hover:bg-white/10 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
          >
            Contact Us
          </a>
        </div>

        <div
          id="features"
          className="mt-20 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3"
        >
          {features.map((feature) => (
            <article
              key={feature.number}
              className="rounded-2xl border border-white/10 bg-white/[0.04] p-6 transition-colors hover:border-cyan-400/50 sm:p-7"
            >
              <p className="text-sm font-semibold text-cyan-400">
                {feature.number}
              </p>
              <h2 className="mt-5 text-xl font-bold">{feature.title}</h2>
              <p className="mt-3 leading-7 text-slate-400">
                {feature.description}
              </p>
            </article>
          ))}
        </div>
      </section>

      <footer className="mt-auto border-t border-white/10 px-5 py-6 text-center text-sm text-slate-500">
        © 2026 TECHZONE BizOS. All rights reserved.
      </footer>
    </main>
  );
}
