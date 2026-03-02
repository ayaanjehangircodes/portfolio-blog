import { posts } from "@/data/posts";
import { notFound } from "next/navigation";

export default function PostPage({ params }: { params: { slug: string } }) {
  const post = posts.find((p) => p.slug === params.slug);

  if (!post) return notFound(); // Returns 404 if post not found

  return (
    <article className="bg-white p-6 shadow-md rounded-md">
      <h1 className="text-3xl font-bold mb-4">{post.title}</h1>
      <p className="text-gray-700 whitespace-pre-line">{post.content}</p>
    </article>
  );
}
