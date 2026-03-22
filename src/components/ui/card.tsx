import React from 'react';

interface CardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  accent?: 'primary' | 'secondary' | 'accent' | 'muted';
  href?: string;
}

const accentMap = {
  primary: 'bg-blue-50 hover:bg-blue-100 text-foreground',
  secondary: 'bg-emerald-50 hover:bg-emerald-100 text-foreground',
  accent: 'bg-amber-50 hover:bg-amber-100 text-foreground',
  muted: 'bg-white hover:bg-gray-100 text-foreground',
};

export function Card({ title, description, icon, accent = 'muted', href }: CardProps) {
  const base = 'group block rounded-lg p-8 transition-all duration-200 transform hover:scale-[1.02]';
  const classes = `${base} ${accentMap[accent]}`;

  const content = (
    <article className={classes}>
      <div className="mb-4 inline-flex h-14 w-14 items-center justify-center rounded-lg bg-white text-primary transition-transform duration-200 group-hover:scale-110">
        {icon}
      </div>
      <h3 className="text-xl font-extrabold tracking-tight text-foreground">{title}</h3>
      <p className="mt-2 text-gray-700">{description}</p>
    </article>
  );

  if (href) {
    return <a href={href}>{content}</a>;
  }

  return content;
}
