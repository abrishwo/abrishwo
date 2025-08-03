import { BlogPost } from "@/lib/types";
import Image from "next/image";
import Link from "next/link";

interface BlogPostCardProps {
  post: BlogPost;
}

export const BlogPostCard = ({ post }: BlogPostCardProps) => {
  return (
    <Link href={`/blog/${post.slug}`}>
      <div className="bg-light dark:bg-dark rounded-lg shadow-lg overflow-hidden border border-gray-200 dark:border-gray-700 h-full transform hover:-translate-y-2 transition-transform duration-300">
        {/* <Image src={post.image} alt={post.title} width={400} height={200} className="w-full h-40 object-cover" /> */}
        <div className="p-6">
          <p className="text-sm text-gray-500 dark:text-gray-400 mb-1">{post.date}</p>
          <h3 className="text-lg font-bold mb-2">{post.title}</h3>
          <p className="text-gray-600 dark:text-gray-400 text-sm">{post.description}</p>
          <div className="mt-4 text-primary dark:text-primaryDark font-semibold">
            Read More &rarr;
          </div>
        </div>
      </div>
    </Link>
  );
};
