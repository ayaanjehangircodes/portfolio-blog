import Link from "next/link";
import { Post } from "@/data/posts";

export default function BlogCard({ post }: { post: Post }) {
  return (
    <div className="bg-white p-6 shadow-md rounded-lg hover:shadow-lg transition">
      <h2 className="text-xl font-semibold mb-2">{post.title}</h2>
      <p className="text-gray-600 mb-4">{post.description}</p>
      <Link
        href={`/blog/${post.slug}`}
        className="text-blue-600 font-medium hover:underline"
      >
        Read More →
      </Link>
    </div>
  );
}
