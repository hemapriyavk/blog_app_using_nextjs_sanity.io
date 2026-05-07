import Image from "next/image";
import Link from "next/link";
import { urlFor } from "@/sanity/lib/image";

export function PostCard({ post }: { post: any }) {
  return (
    <article className="rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
      {post.mainImage && (
        <div className="relative h-48 w-full">
          <Image
            src={urlFor(post.mainImage).url()}
            alt={post.title}
            fill
            sizes="100vw"
            className="object-cover"
          />
        </div>
      )}
      <div className="p-4">
        <Link href={`/posts/${post.slug.current}`}>
          <h3 className="text-xl font-bold hover:text-blue-500 transition-colors text-gray-800">
            {post.title}
          </h3>
        </Link>
        {post.author && (
          <p className="text-sm text-gray-700 mt-2">
            By <span className="font-semibold">{post.author.name}</span>
          </p>
        )}
        <p className="text-gray-700 mt-3 line-clamp-2">{post.description}</p>
        {post.categories && post.categories.length > 0 && (
          <div className="flex gap-2 mt-3 flex-wrap">
            {post.categories.map((cat: any) => (
              <span
                key={cat._id}
                className="text-xs bg-gray-200 px-2 py-1 rounded text-gray-700"
              >
                {cat.title}
              </span>
            ))}
          </div>
        )}
        {post.publishedAt && (
          <p className="text-xs text-gray-500 mt-3">
            {new Date(post.publishedAt).toLocaleDateString()}
          </p>
        )}
      </div>
    </article>
  );
}
