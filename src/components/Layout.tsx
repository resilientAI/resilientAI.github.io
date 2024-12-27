import React from 'react';

import Link from 'next/link'
import { Input, Button } from "@nextui-org/react";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen flex flex-col">
      <header className="bg-primary text-primary-foreground p-4">
        <div className="container mx-auto flex flex-col sm:flex-row justify-between items-center">
          <Link href="/" className="text-2xl font-bold mb-4 sm:mb-0">resilientAI</Link>
          <nav className="space-x-4">
            <Link href="/" className="hover:underline">Home</Link>
            <Link href="/recommendation" className="hover:underline">Hairstyle Recommendation</Link>
            <Link href="/community" className="hover:underline">Community</Link>
            <Link href="/profile" className="hover:underline">Profile</Link>
            <Link href="/order" className="hover:underline">Order Service</Link>
          </nav>
        </div>
      </header>
      <main className="flex-grow container mx-auto p-4">
        {children}
      </main>
      <footer className="bg-gray-100 p-4 text-center">
        <p>&copy; 2023 resilientAI. All rights reserved.</p>
      </footer>
    </div>
  )
}

