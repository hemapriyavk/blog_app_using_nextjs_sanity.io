import Link from "next/link";

export function Header() {
  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
        <Link href="/">
          <div className="text-2xl font-bold bg-gradient-to-r from-black to-gray-600 bg-clip-text text-transparent">
            Medium Clone
          </div>
        </Link>

        <nav className="hidden md:flex gap-8">
          <Link href="/posts" className="hover:text-gray-600 transition-colors">
            Posts
          </Link>
          <Link href="/authors" className="hover:text-gray-600 transition-colors">
            Authors
          </Link>
          <Link href="/categories" className="hover:text-gray-600 transition-colors">
            Categories
          </Link>
          <Link href="/about" className="hover:text-gray-600 transition-colors">
            About
          </Link>
        </nav>

        <button className="px-4 py-2 bg-black text-white rounded hover:bg-gray-800 transition-colors">
          Subscribe
        </button>
      </div>
    </header>
  );
}
