import Image from "next/image";
import Link from "next/link";
import { urlFor } from "@/sanity/lib/image";

interface FeaturedPostProps {
  post: any;
}

export function FeaturedPost({ post }: FeaturedPostProps) {
  return (
    <div className="relative rounded-2xl overflow-hidden h-96 group">
      {/* Background Image */}
      {post.mainImage && (
        <Image
          src={urlFor(post.mainImage).url()}
          alt={post.title}
          fill
          sizes="100vw"
          className="object-cover group-hover:scale-105 transition-transform duration-300"
        />
      )}

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />

      {/* Content */}
      <div className="absolute inset-0 p-8 flex flex-col justify-end">
        {post.categories && post.categories.length > 0 && (
          <div className="flex gap-2 mb-4">
            {post.categories.slice(0, 2).map((cat: any) => (
              <span
                key={cat._id}
                className="text-xs bg-white/20 backdrop-blur px-3 py-1 rounded-full text-white"
              >
                {cat.title}
              </span>
            ))}
          </div>
        )}

        <Link href={`/posts/${post.slug.current}`}>
          <h2 className="text-3xl font-bold text-white mb-3 hover:text-gray-200 transition-colors line-clamp-2">
            {post.title}
          </h2>
        </Link>

        {post.author && (
          <div className="flex items-center gap-3">
            {post.author.image && (
              <div className="relative w-10 h-10">
                <Image
                  src={urlFor(post.author.image).url()}
                  alt={post.author.name}
                  fill
                  sizes="40px"
                  className="rounded-full object-cover"
                />
              </div>
            )}
            <div className="text-white">
              <p className="font-semibold text-sm">{post.author.name}</p>
              {post.publishedAt && (
                <p className="text-xs text-gray-300">
                  {new Date(post.publishedAt).toLocaleDateString()}
                </p>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
