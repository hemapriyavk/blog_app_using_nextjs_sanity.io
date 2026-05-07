import Image from "next/image";
import { getPost, getPosts } from "@/sanity/lib/queries";
import { urlFor } from "@/sanity/lib/image";
import { PostBody } from "@/app/components/PostBody";
import { notFound } from "next/navigation";

export async function generateStaticParams() {
  const posts = await getPosts();
  return posts.map((post: any) => ({
    slug: post.slug.current,
  }));
}

interface PostPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export default async function PostPage({ params }: PostPageProps) {
  const { slug } = await params;
  const post = await getPost(slug);

  if (!post) {
    notFound();
  }

  return (
    <article className="min-h-screen bg-white">
      {/* Main Image */}
      {post.mainImage && (
        <div className="relative w-full h-96">
          <Image
            src={urlFor(post.mainImage).url()}
            alt={post.title}
            fill
            sizes="100vw"
            className="object-cover"
            priority
          />
        </div>
      )}

      {/* Article Content */}
      <div className="max-w-2xl mx-auto px-4 py-12">
        {/* Title */}
        <h1 className="text-5xl font-bold mb-6 text-gray-900">{post.title}</h1>

        {/* Meta Information */}
        <div className="flex items-center gap-4 mb-8 pb-8 border-b">
          {post.author && (
            <>
              {post.author.image && (
                <div className="relative w-12 h-12">
                  <Image
                    src={urlFor(post.author.image).url()}
                    alt={post.author.name}
                    fill
                    sizes="48px"
                    className="rounded-full object-cover"
                  />
                </div>
              )}
              <div>
                <p className="font-semibold text-gray-700">{post.author.name}</p>
                {post.publishedAt && (
                  <p className="text-gray-700 text-sm">
                    {new Date(post.publishedAt).toLocaleDateString("en-US", {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })}
                  </p>
                )}
              </div>
            </>
          )}
        </div>

        {/* Categories */}
        {post.categories && post.categories.length > 0 && (
          <div className="flex gap-2 mb-8 flex-wrap">
            {post.categories.map((cat: any) => (
              <span
                key={cat._id}
                className="text-sm bg-gray-100 px-3 py-1 rounded-full text-gray-700"
              >
                {cat.title}
              </span>
            ))}
          </div>
        )}

        {/* Body */}
        {post.body && <PostBody content={post.body} />}
      </div>
    </article>
  );
}
