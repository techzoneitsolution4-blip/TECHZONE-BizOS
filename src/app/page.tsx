
export default function Home() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <nav className="flex items-center justify-between border-b border-white/10 px-6 py-5 md:px-12">
        <div className="text-xl font-bold">
          TECHZONE <span className="text-cyan-400">BizOS</span>
        </div>
        <span className="text-sm text-slate-300">
          One Link. Full Business.
        </span>
      </nav>

      <section className="mx-auto max-w-6xl px-6 py-24 md:py-32">
        <p className="mb-6 inline-block rounded-full border border-cyan-400/30 bg-cyan-400/10 px-4 py-2 text-sm text-cyan-300">
          Your Business Operating System
        </p>

        <h1 className="max-w-4xl text-4xl font-bold leading-tight md:text-7xl">
          Run Your Entire Business.
          <span className="block text-cyan-400">
            From One Powerful Dashboard.
          </span>
        </h1>

        <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-400">
          Manage customers, vendors, sales, inventory, bookings,
          payments and your digital storefront in one connected platform.
        </p>

        <div className="mt-9 flex flex-wrap gap-4">
          <a
            href="#features"
            className="rounded-xl bg-cyan-400 px-6 py-3 font-semibold text-slate-950 hover:bg-cyan-300"
          >
            Explore Features →
          </a>
          <a
            href="mailto:hello@techzone.pk"
            className="rounded-xl border border-white/20 px-6 py-3 font-semibold hover:bg-white/10"
          >
            Contact Us
          </a>
        </div>

        <div id="features" className="mt-20 grid gap-5 md:grid-cols-3">
          {[
            {
              title: "Business Management",
              description: "Manage customers, vendors, staff and daily operations.",
              icon: "01",
            },
            {
              title: "Sales & Finance",
              description: "Connect orders, invoices, payments, inventory and Khata.",
              icon: "02",
            },
            {
              title: "One Link + QR",
              description: "Give every business its own digital presence.",
              icon: "03",
            },
          ].map((feature) => (
            <article
              key={feature.icon}
              className="rounded-2xl border border-white/10 bg-white/[0.04] p-6 transition hover:border-cyan-400/50"
            >
              <p className="text-sm font-semibold text-cyan-400">
                {feature.icon}
              </p>
              <h2 className="mt-5 text-xl font-bold">{feature.title}</h2>
              <p className="mt-3 leading-7 text-slate-400">
                {feature.description}
              </p>
            </article>
          ))}
        </div>
      </section>

      <footer className="border-t border-white/10 px-6 py-6 text-center text-sm text-slate-500">
        © 2026 TECHZONE BizOS
      </footer>
    </main>
  );
}
