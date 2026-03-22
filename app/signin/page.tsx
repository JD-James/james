import Link from 'next/link';
import { Navbar } from '@/components/navbar';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

export default function SignInPage() {
  return (
    <div className="min-h-screen bg-muted text-foreground">
      <Navbar />
      <main className="mx-auto max-w-2xl px-6 py-20">
        <div className="rounded-lg bg-white p-10">
          <h1 className="text-3xl font-extrabold">Sign in</h1>
          <p className="mt-2 text-gray-600">Quick access to your workspace with secure and flat-branded identity flows.</p>
          <form action="#" className="mt-8 space-y-5">
            <Input label="Email" type="email" placeholder="you@example.com" required />
            <Input label="Password" type="password" placeholder="••••••••" required />
            <Button variant="primary" size="lg" type="submit">Continue</Button>
          </form>
          <p className="mt-6 text-sm text-gray-600">New? <Link href="/about" className="font-semibold text-primary">Learn about our product</Link></p>
        </div>
      </main>
    </div>
  );
}
