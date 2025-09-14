import { getBlogPostBySlug, getBlogPosts } from "@/lib/cms";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Image from "next/image";
import ReactMarkdown from 'react-markdown';

// Generate static pages for each blog post at build time
export async function generateStaticParams() {
  const posts = await getBlogPosts();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

// Generate dynamic metadata for the page
export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const post = await getBlogPostBySlug(params.slug);

  if (!post) {
    return {
      title: "Post Not Found",
    };
  }

  return {
    title: `${post.title} | Abreham's Blog`,
    description: post.description,
    openGraph: {
        title: post.title,
        description: post.description,
        images: [post.image],
    }
  };
}

export default async function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = await getBlogPostBySlug(params.slug);

  if (!post) {
    notFound();
  }

  return (
    <div className="py-24 sm:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <article className="max-w-3xl mx-auto">
          <header className="mb-8 text-center">
            <p className="text-gray-500 dark:text-gray-400">{new Date(post.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</p>
            <h1 className="text-4xl md:text-5xl font-bold mt-2 text-dark dark:text-light">{post.title}</h1>
            <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">{post.description}</p>
          </header>

          <div className="relative w-full h-64 md:h-96 mb-8 rounded-lg overflow-hidden">
             <Image src={post.image} alt={post.title} layout="fill" objectFit="cover" className="bg-gray-200" />
          </div>

          <div className="prose prose-lg dark:prose-invert mx-auto">
             <ReactMarkdown>{post.content}</ReactMarkdown>
          </div>
        </article>
      </div>
    </div>
  );
}
