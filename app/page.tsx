import Link from 'next/link';
import { ArrowRight, Server, Search, Shield, Sparkles } from 'lucide-react';
import { Navbar } from '@/components/navbar';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { ProductCard } from '@/components/product-card';

const stats = [
  { value: '10K+', label: 'Users', color: 'text-blue-600' },
  { value: '99.9%', label: 'Uptime', color: 'text-emerald-600' },
  { value: '2x', label: 'Performance', color: 'text-amber-500' },
];

export default function HomePage() {
  return (
    <div className="min-h-screen bg-muted text-foreground">
      <Navbar />

      <main className="relative overflow-hidden">
        <section className="relative bg-primary text-white">
          <div className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-white/10" />
          <div className="absolute -bottom-24 left-10 h-64 w-64 rounded-full bg-secondary/15" />
          <div className="mx-auto max-w-7xl px-6 py-20">
            <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
              <div>
                <p className="mb-4 inline-block rounded-md bg-white/20 px-4 py-2 text-sm font-semibold uppercase tracking-wider text-white">
                  Flat Design System
                </p>
                <h1 className="text-5xl font-extrabold leading-tight tracking-tight">
                  Build bold interfaces with no depth, only color.
                </h1>
                <p className="mt-6 max-w-xl text-lg text-white/90">
                  A digital-native visual style based on sharp shapes, dramatic typography, and absolute clarity. Ship product pages, catalogs, and tools with consistent scale and an iconic aesthetic.
                </p>
                <div className="mt-8 flex flex-wrap gap-4">
                  <Button variant="primary" size="lg">Get started</Button>
                  <Link href="/product" className="inline-flex items-center gap-2 rounded-md bg-white px-6 py-3 text-sm font-semibold text-primary transition-all duration-200 hover:scale-105 hover:bg-gray-100">
                    Explore products <ArrowRight size={18} />
                  </Link>
                </div>
                <div className="mt-8 max-w-md rounded-lg bg-white p-4">
                  <div className="flex items-center gap-3">
                    <input
                      type="search"
                      placeholder="Search design modules, features, docs..."
                      className="w-full rounded-md border-2 border-transparent bg-muted px-4 py-3 text-gray-800 outline-none transition-all duration-200 focus:border-primary focus:bg-white"
                    />
                    <button className="rounded-md bg-secondary px-4 py-3 font-semibold text-white transition-all duration-200 hover:bg-emerald-500 hover:scale-105">
                      Search
                    </button>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <Card
                  title="Search-first workflows"
                  description="Fast finding with predictive matching and instant keyboard support."
                  icon={<Search size={24} />}
                  accent="primary"
                />
                <Card
                  title="Enterprise reliability"
                  description="Architected for uptime and designed for everyday operations at scale."
                  icon={<Server size={24} />}
                  accent="secondary"
                />
                <Card
                  title="Secure by default"
                  description="Transparent controls and enforced policies across every surface."
                  icon={<Shield size={24} />}
                  accent="accent"
                />
                <Card
                  title="Pixel-toned motion"
                  description="Subtle transform-based interactions that feel crisp and intentional."
                  icon={<Sparkles size={24} />}
                  accent="muted"
                />
              </div>
            </div>
          </div>
        </section>

        <section className="bg-white py-16">
          <div className="mx-auto max-w-7xl px-6">
            <div className="grid gap-4 md:grid-cols-3">
              {stats.map((stat) => (
                <div key={stat.label} className="rounded-lg bg-muted p-8">
                  <p className={`text-4xl font-extrabold ${stat.color}`}>{stat.value}</p>
                  <p className="mt-2 uppercase tracking-wider text-gray-500">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-muted py-16">
          <div className="mx-auto max-w-7xl px-6">
            <div className="mb-10 text-center">
              <h2 className="text-3xl font-extrabold text-foreground">Pricing options for every team</h2>
              <p className="mt-2 text-gray-600">Pick a plan that scales with your product and keep your interface bold.</p>
            </div>
            <div className="grid gap-6 md:grid-cols-3">
              <ProductCard
                title="Starter"
                price="$0"
                description="Great for individuals or small projects."
                features={["Basic dashboard", "Search and filters", "Community support"]}
              />
              <ProductCard
                title="Growth"
                price="$29"
                description="Expanded capabilities for growing teams."
                features={["Team collaboration", "Priority insights", "Advanced analytics"]}
                badge="Most popular"
              />
              <ProductCard
                title="Enterprise"
                price="Custom"
                description="Designed for large companies and mission-critical workloads."
                features={["SLA & compliance", "Dedicated support", "Custom integrations"]}
              />
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-foreground text-white">
        <div className="mx-auto max-w-7xl px-6 py-10">
          <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
            <div>
              <h3 className="text-xl font-black">James</h3>
              <p className="mt-2 text-sm text-gray-100">A graphic-first flat design kit for high-contrast interfaces.</p>
            </div>
            <div className="flex gap-3">
              <Link href="/about" className="text-sm font-semibold text-white/80 hover:text-white">About</Link>
              <Link href="/product" className="text-sm font-semibold text-white/80 hover:text-white">Product</Link>
            </div>
          </div>
          <p className="mt-8 text-xs text-white/60">© {new Date().getFullYear()} James UI. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
