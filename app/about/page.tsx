import { Navbar } from '@/components/navbar';
import { Button } from '@/components/ui/button';

export default function AboutPage() {
  return (
    <div className="bg-white text-foreground min-h-screen">
      <Navbar />

      <main className="mx-auto max-w-7xl px-6 py-16">
        <section className="rounded-lg bg-primary/5 p-10">
          <span className="mb-4 inline-flex rounded-md bg-amber-50 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-amber-700">
            About this system
          </span>
          <h1 className="text-4xl font-extrabold">Design principles & usage</h1>
          <p className="mt-4 text-lg text-gray-700">
            Live with flatness: zero shadows, clean edges, and decisive color blocks. Typography and grids are the framework; geometry is the decoration.
          </p>
          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {[
              'High contrast text and backgrounds',
              'Strong typographic rhythm with Outfi',
              'Consistent rounded edges (6-8px)',
            ].map((item) => (
              <div key={item} className="rounded-lg bg-white p-5 border-2 border-border">
                <p className="font-semibold text-gray-800">{item}</p>
              </div>
            ))}
          </div>
          <div className="mt-10">
            <Button variant="secondary" size="lg">Learn more</Button>
          </div>
        </section>
      </main>
    </div>
  );
}
