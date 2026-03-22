import { Button } from './ui/button';

interface ProductCardProps {
  title: string;
  price: string;
  description: string;
  features: string[];
  badge?: string;
}

export function ProductCard({ title, price, description, features, badge }: ProductCardProps) {
  return (
    <article className="group rounded-lg bg-white p-8 transition-all duration-200 hover:scale-[1.02]">
      {badge && <span className="mb-4 inline-block rounded-md bg-amber-50 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-amber-700">{badge}</span>}
      <div className="mb-3 flex items-end justify-between gap-4">
        <h3 className="text-2xl font-extrabold text-foreground">{title}</h3>
        <span className="text-xl font-bold text-primary">{price}</span>
      </div>
      <p className="mb-6 text-gray-600">{description}</p>
      <ul className="mb-6 space-y-2 text-gray-700">
        {features.map((feature) => (
          <li key={feature} className="flex items-center gap-2">
            <span className="inline-flex h-3 w-3 shrink-0 rounded-full bg-primary" />
            {feature}
          </li>
        ))}
      </ul>
      <Button variant="primary" size="default">
        Choose plan
      </Button>
    </article>
  );
}
