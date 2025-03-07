"use client"

import Hero from '../components/Hero';
import Projects from '../components/Projects';
import Contact from '../components/Contact';

export default function Page() {
  return (
    <main className="min-h-screen bg-gray-900">
      <Hero />
      <Projects />
      <Contact />
    </main>
  );
}
