import { client } from "@/sanity/lib/client";
import { groq } from "next-sanity";
import { PostCard } from "@/app/components/PostCard";
import { Header } from "@/app/components/Header";
import { Footer } from "@/app/components/Footer";
import Image from "next/image";
import { urlFor } from "@/sanity/lib/image";
import { notFound } from "next/navigation";

interface AuthorPageProps {
  params: Promise<{
    slug: string;
  }>;
}

async function getAuthorBySlug(slug: string) {
  return await client.fetch(
    groq`*[_type == "author" && (slug.current == $slug || _id == $slug)][0] {
      _id,
      name,
      image,
      bio,
      slug,
    }`,
    { slug }
  );
}

async function getAuthorPosts(authorId: string) {
  return await client.fetch(
    groq`*[_type == "post" && author._ref == $authorId] | order(publishedAt desc) {
      _id,
      title,
      slug,
      mainImage,
      description,
      publishedAt,
      categories[] -> {
        _id,
        title,
      },
    }`,
    { authorId }
  );
}

export default async function AuthorPage({ params }: AuthorPageProps) {
  const { slug } = await params;
  const author = await getAuthorBySlug(slug);

  if (!author) {
    notFound();
  }

  const posts = await getAuthorPosts(author._id);

  return (
    <>
      <Header />
      <main className="bg-white min-h-screen">
        {/* Author Bio Section */}
        <div className="max-w-2xl mx-auto px-4 py-12">
          <div className="text-center mb-8">
            {author.image && (
              <div className="relative w-32 h-32 mx-auto mb-6">
                <Image
                  src={urlFor(author.image).url()}
                  alt={author.name}
                  fill
                  sizes="128px"
                  className="rounded-full object-cover"
                />
              </div>
            )}

            <h1 className="text-4xl font-bold mb-2 text-gray-700">{author.name}</h1>

            {author.bio && (
              <div className="text-gray-800 mb-6">
                {Array.isArray(author.bio)
                  ? author.bio.map((block: any, idx: number) => (
                      <p key={idx}>
                        {block.children?.map((c: any) => c.text).join("")}
                      </p>
                    ))
                  : author.bio}
              </div>
            )}
          </div>
        </div>

        {/* Author's Posts */}
        <div className="max-w-7xl mx-auto px-4 pb-16">
          <h2 className="text-3xl font-bold mb-8 text-gray-700">Articles by {author.name}</h2>

          {posts.length === 0 ? (
            <p className="text-gray-800 text-center">
              No articles yet from this author.
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
