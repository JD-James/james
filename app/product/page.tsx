import { Navbar } from '@/components/navbar';
import { ProductCard } from '@/components/product-card';

const products = [
  {
    title: 'Performance Booster',
    price: '$49',
    description: 'Optimize runtime and reduce rendering overhead with no extra complexity.',
    features: ['Build-time code pruning', 'Bathed-in flat visuals', 'Auto-Kit integration'],
  },
  {
    title: 'Search Operator',
    price: '$79',
    description: 'Instant, guided product search with tokenization and relevance ranking.',
    features: ['Real-time suggestions', 'Synonym tuning', 'Analytics dashboard'],
    badge: 'Best for teams',
  },
  {
    title: 'Identity Vault',
    price: '$99',
    description: 'Authentication foundation with role-based access and audit trails.',
    features: ['OAuth2 flows', '2FA guards', 'Policy engine'],
  },
];

export default function ProductPage() {
  return (
    <div className="bg-muted text-foreground min-h-screen">
      <Navbar />
      <main className="mx-auto max-w-7xl px-6 py-16">
        <header className="mb-12">
          <h1 className="text-4xl font-extrabold tracking-tight">Product Catalog</h1>
          <p className="mt-3 text-lg text-gray-600">An inventory of modular tools that follow the bold flat design system.</p>
        </header>
        <section className="grid gap-6 md:grid-cols-3">
          {products.map((product) => (
            <ProductCard key={product.title} {...product} />
          ))}
        </section>
      </main>
    </div>
  );
}
