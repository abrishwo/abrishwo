import { getBlogPosts } from "@/lib/cms";
import { BlogPostCard } from "@/components/ui/BlogPostCard";
import Link from "next/link";
import { Button } from "../ui/Button";

export const Blog = async () => {
  const allPosts = await getBlogPosts();
  // Displaying only the first 2 posts for the preview section
  const postsToShow = allPosts.slice(0, 2);

  return (
    <section id="blog" className="py-20 bg-gray-50 dark:bg-gray-900/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-12">From My Blog</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {postsToShow.map((post) => (
            <BlogPostCard key={post.slug} post={post} />
          ))}
        </div>
        <div className="text-center mt-12">
          <Link href="/blog">
            <Button variant="outline">
                View All Posts
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};
