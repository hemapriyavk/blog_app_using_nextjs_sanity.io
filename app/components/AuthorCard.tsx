import Image from "next/image";
import Link from "next/link";
import { urlFor } from "@/sanity/lib/image";

interface AuthorCardProps {
  author: any;
}

export function AuthorCard({ author }: AuthorCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 text-center hover:shadow-lg transition-shadow">
      {author.image && (
        <div className="relative w-24 h-24 mx-auto mb-4">
          <Image
            src={urlFor(author.image).url()}
            alt={author.name}
            fill
            sizes="96px"
            className="rounded-full object-cover"
          />
        </div>
      )}

      <Link href={`/authors/${author.slug?.current || author._id}`}>
        <h3 className="text-xl font-bold hover:text-blue-500 transition-colors text-blue-800">
          {author.name}
        </h3>
      </Link>

      {author.bio && (
        <p className="text-gray-800 text-sm mt-2 line-clamp-3">
          {Array.isArray(author.bio)
            ? author.bio
                .map((block: any) => block.children?.map((c: any) => c.text).join(""))
                .join(" ")
            : author.bio}
        </p>
      )}

      <Link href={`/authors/${author.slug?.current || author._id}`}>
        <button className="mt-4 px-4 py-2 bg-black text-white rounded hover:bg-gray-800 transition-colors">
          View Posts
        </button>
      </Link>
    </div>
  );
}
