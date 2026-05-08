import { getPosts } from "@/sanity/lib/queries";
import { PostCard } from "../components/PostCard";
import { Header } from "../components/Header";

export default async function PostsPage() {
  const posts = await getPosts();

  return (
    <>
    <Header />
    <div className="min-h-screen bg-white">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold mb-12 text-gray-700">Latest Posts</h1>
        
        {posts.length === 0 ? (
          <p className="text-gray-800">No posts found. Start creating content in Sanity Studio!</p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {posts.map((post: any) => (
              <PostCard key={post._id} post={post} />
            ))}
          </div>
        )}
      </div>
    </div>
    </>
    
  );
}
