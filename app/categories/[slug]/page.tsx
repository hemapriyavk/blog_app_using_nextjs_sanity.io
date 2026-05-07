import { client } from "@/sanity/lib/client";
import { groq } from "next-sanity";
import { PostCard } from "@/app/components/PostCard";
import { Header } from "@/app/components/Header";
import { Footer } from "@/app/components/Footer";
import { notFound } from "next/navigation";

interface CategoryPageProps {
  params: Promise<{
    slug: string;
  }>;
}

async function getCategoryBySlug(slug: string) {
  return await client.fetch(
    groq`*[_type == "category" && slug.current == $slug][0] {
      _id,
      title,
      description,
    }`,
    { slug }
  );
}

async function getCategoryPosts(categoryId: string) {
  return await client.fetch(
    groq`*[_type == "post" && references($categoryId)] | order(publishedAt desc) {
      _id,
      title,
      slug,
      author -> {
        name,
        image,
      },
      mainImage,
      categories[] -> {
        _id,
        title,
      },
      publishedAt,
      description,
    }`,
    { categoryId }
  );
}

export default async function CategoryPage({ params }: CategoryPageProps) {
  const { slug } = await params;
  const category = await getCategoryBySlug(slug);

  if (!category) {
    notFound();
  }

  const posts = await getCategoryPosts(category._id);

  return (
    <>
      <Header />
      <main className="bg-white min-h-screen">
        <div className="max-w-7xl mx-auto px-4 py-12">
          <h1 className="text-4xl font-bold mb-2 text-gray-700">{category.title}</h1>
          {category.description && (
            <p className="text-gray-800 mb-8">{category.description}</p>
          )}

          {posts.length === 0 ? (
            <p className="text-gray-800 text-center py-12">
              No posts in this category yet.
            </p>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {posts.map((post: any) => (
                <PostCard key={post._id} post={post} />
              ))}
            </div>
          )}
        </div>
      </main>
      <Footer />
    </>
  );
}
