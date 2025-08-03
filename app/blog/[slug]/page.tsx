import { blogPosts } from "@/lib/data";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Image from "next/image";

// Generate static pages for each blog post
export async function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }));
}

// Find the post data for the current slug
const getPost = (slug: string) => {
  const post = blogPosts.find((p) => p.slug === slug);
  return post;
};

// Generate dynamic metadata for the page
export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const post = getPost(params.slug);

  if (!post) {
    return {
      title: "Post Not Found",
    };
  }

  return {
    title: `${post.title} | Abreham's Blog`,
    description: post.description,
  };
}

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = getPost(params.slug);

  if (!post) {
    notFound();
  }

  return (
    <div className="py-24 sm:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <article className="max-w-3xl mx-auto">
          <header className="mb-8 text-center">
            <p className="text-gray-500 dark:text-gray-400">{post.date}</p>
            <h1 className="text-4xl md:text-5xl font-bold mt-2 text-dark dark:text-light">{post.title}</h1>
            <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">{post.description}</p>
          </header>

          {/* <div className="relative w-full h-64 md:h-96 mb-8 rounded-lg overflow-hidden">
             <Image src={post.image} alt={post.title} layout="fill" objectFit="cover" />
          </div> */}

          {/* This is where the markdown content would be rendered.
              For a real app, you'd use a library like 'react-markdown' or 'mdx-bundler'.
              For now, I'll just display the raw content.
          */}
          <div className="prose prose-lg dark:prose-invert mx-auto">
             {post.content}
          </div>
        </article>
      </div>
    </div>
  );
}
