import Link from 'next/link';

export default function Home() {
  return (
    <main className="flex flex-col items-center p-24">
      <span className="text-5xl">Hola Mundo</span>

      <Link href="/about" className="mt-4 text-blue-500 underline">
        Go to About Page
      </Link>

    </main>

  );
}