import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="bg-white shadow p-4 flex justify-between items-center">
      <div className="text-xl font-bold">MyPortfolio</div>
      <div className="flex gap-6">
        <Link href="/">Home</Link>
        <Link href="/about">About</Link>
        <Link href="/blog">Blog</Link>
      </div>
    </nav>
  );
}
