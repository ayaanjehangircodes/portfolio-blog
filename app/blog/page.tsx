import { posts } from "@/data/posts";
import BlogCard from "@/components/BlogCard";

export default function Blog() {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">Blog</h1>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {posts.map((post) => (
          <BlogCard key={post.slug} post={post} />
        ))}
      </div>
    </div>
  );
}
