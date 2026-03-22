import Link from 'next/link';
import { Button } from './ui/button';

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b-2 border-border bg-white">
      <div className="mx-auto flex w-full max-w-7xl items-center justify-between gap-6 px-6 py-4">
        <Link href="/" className="text-2xl font-black tracking-tight text-foreground">
          James.
        </Link>
        <nav className="hidden items-center gap-4 md:flex">
          <Link href="/" className="text-sm font-semibold text-gray-700 hover:text-foreground">
            Home
          </Link>
          <Link href="/product" className="text-sm font-semibold text-gray-700 hover:text-foreground">
            Product
          </Link>
          <Link href="/about" className="text-sm font-semibold text-gray-700 hover:text-foreground">
            About
          </Link>
        </nav>
        <div className="hidden md:block">
          <Link href="/about">
            <Button variant="outline" size="default">
              Sign in
            </Button>
          </Link>
        </div>
      </div>
    </header>
  );
}
