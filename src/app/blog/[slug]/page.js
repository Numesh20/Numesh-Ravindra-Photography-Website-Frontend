import { POSTS } from "../posts";
import BlogPostClient from "./BlogPostClient";

export async function generateStaticParams() {
  return POSTS.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const post = POSTS.find((p) => p.slug === slug);
  if (!post) return { title: "Article Not Found" };

  return {
    title: post.title,
    description: post.excerpt,
    keywords: [
      post.category + " photography Sri Lanka",
      "photography tips Sri Lanka",
      "Numesh Ravindra Photography blog",
      "photographer Mawanella",
    ],
    alternates: {
      canonical: `https://www.numeshravindra.me/blog/${post.slug}`,
    },
    openGraph: {
      title: post.title,
      description: post.excerpt,
      url: `https://www.numeshravindra.me/blog/${post.slug}`,
      siteName: "Numesh Ravindra Photography",
      images: [{ url: post.cover, width: 1200, height: 630, alt: post.title }],
      type: "article",
      publishedTime: post.date,
      locale: "en_LK",
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.excerpt,
      images: [post.cover],
    },
  };
}

export default async function BlogPostPage({ params }) {
  const { slug } = await params;
  return <BlogPostClient slug={slug} />;
}
