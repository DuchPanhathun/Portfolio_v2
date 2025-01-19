import React from 'react';

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="min-h-screen">
      {/* Add Header component here */}
      <main>{children}</main>
      {/* Add Footer component here */}
    </div>
  );
} 